import Vue from 'vue';
import * as axios from 'axios';
import commonConfig from '@/assets/config';
import store from '@/store';
import { Toast } from 'vant';

Vue.use(Toast);

/**
 * @author john.bian
 * @description axios封装
 * @
 */
class Fetch {
  constructor(public ax: axios.AxiosInstance) {}

  /**
   * get 请求
   * @param url 请求地址
   */
  public async get(url: string): Promise<any> {
    try {
      // const headers = {};
      const ret = await this.ax.get(encodeURI(url));
      return this.handleResponse(ret);
    } catch (err) {
      return this.commonErrorHandle(err);
    }
  }

  /**
   * post 请求
   * @param url 请求地址
   * @param params 请求参数
   */
  public async post(url: any, params: any): Promise<any> {
    try {
      // const headers = {};
      const ret = await this.ax.post(encodeURI(url), params);
      return this.handleResponse(ret);
    } catch (err) {
      return this.commonErrorHandle(err);
    }
  }

  private handleResponse(ret: axios.AxiosResponse): any {
    // message.destroy();
    if (ret.data.code !== '0000') {
      // message.error(ret.data.message);
      return;
    }
    return ret.data.data;
  }

  private commonErrorHandle(err: any): any {
    if (err.response && err.response.data) {
      return err.response.data;
    }
    return err;
  }
}
const instance = axios.default.create({
  baseURL: commonConfig.baseUrl,
});

instance.interceptors.request.use((config): any => {
  Toast.loading({
    duration: 0,
    message: '拼命加载中',
    loadingType: 'spinner',
    forbidClick: true,
  });
  return config;
});

instance.interceptors.response.use((response): any => {
  Toast.clear();
  if (response.data.code === '0000') {
    return response;
  } else if (commonConfig.responseCode.businessError.indexOf(response.data.code) !== -1) {
    return response;
  } else if (response.data.code[0] === '9') {
    Toast(commonConfig.responseCode.systemError);
    return response;
  } else if (Number(response.data.code[0]) >= 0 && Number(response.data.code[0]) <= 8) {
    Toast(response.data.desc);
    return response;
  }
}, (err): any => {
  Toast.clear();
  Toast(commonConfig.responseCode.systemError);
  return err.response;
});

const fetch = new Fetch(instance);

export default fetch;

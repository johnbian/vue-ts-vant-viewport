import fetch from '@/assets/fetch';
/**
 * @author johnbian
 * @description 接口处理
 */
class API {

  /**
   * @author johnbian
   * @description demo 测试post请求
   */
  public async nameSet(): Promise<any> {
    const params = {};
    const res = await fetch.post('/nameSet', params);
    return res;
  }
}

const api =  new API();
export default api;

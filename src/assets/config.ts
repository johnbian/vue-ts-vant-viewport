const ENV = 'SIT';
// const ENV = 'UAT'
// const ENV = 'PRO';

const urlList = {
  SIT: 'http://58.49.129.4/sit',
  UAT: 'http://58.49.129.4',
  PRO: 'https://ecustomer.cntaiping.com',
};

const baseUrl = urlList[ENV];

const responseCode = {
  businessError: ['9794', '9894', '9896', '9797', '9796', '9795', '9793'],
  networkError: '网络不稳定，请稍后再试',
  systemError: '系统繁忙，请稍后再试',
};

/**
 * 1: 太平头条 2: 健康讲堂
 */
const typeId = {
  TPTT: {
    id: 1,
    name: '太平头条',
  },
  JKJT: {
    id: 2,
    name: '健康讲堂',
  },
};

export default {
  responseCode,
  baseUrl,
  ENV,
  typeId,
};

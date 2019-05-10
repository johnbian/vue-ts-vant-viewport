const ENV = 'SIT';
// const ENV = 'PRO';

const urlList = {
  SIT: 'https://www.easy-mock.com/mock/5a0294396be3e9439ddfdec1/hospital',
  PRO: 'https://www.easy-mock.com/mock/5a0294396be3e9439ddfdec1/hospital',
};

const baseUrl = urlList[ENV];

export default {
  baseUrl,
  ENV,
};

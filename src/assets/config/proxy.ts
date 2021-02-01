module.exports = {
  SIT: {
    '/sit': {
      target: 'https://www.easy-mock.com/mock/5a0294396be3e9439ddfdec1/hospital', // 代理接口
      changeOrigin: true,
    },
  },
  UAT: {
    '/uat': {
      target: 'https://www.easy-mock.com/mock/5a0294396be3e9439ddfdec1/hospital', // 代理接口
      changeOrigin: true,
    },
  },
};

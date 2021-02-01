const ENV = process.env.VUE_APP_ENV || 'SIT';
const baseUrl = process.env.VUE_APP_BASEURL;
export default {
  ENV,
  baseUrl,
};

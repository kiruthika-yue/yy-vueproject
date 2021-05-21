import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});

// 请求拦截
instance.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err),
);
// 响应拦截
instance.interceptors.response.use(
  (res) => {
    if (res.data.status === 'fail') {
      return Promise.reject(res.data.msg);
    }
    return res.data.data;
  },
  (err) => Promise.reject(err),
);

export default instance;

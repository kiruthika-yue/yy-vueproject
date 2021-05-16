import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mallapi.duyiedu.com/'
});

// 请求拦截
instance.interceptors.request.use(
    (config) => {
        console.log(config);
        return config;
    },
    (err) => { return Promise.reject(err) }
)
// 响应拦截
instance.interceptors.response.use(
    (res) => {
        console.log(res)
        if (res.data.status === 'fail') {
            return Promise.reject(res.data.msg)
        }else{
            return res.data.data;
        }
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance;
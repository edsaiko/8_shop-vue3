import axios from 'axios'
const http =axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
});

//axios请求拦截器
//一般进行token身份验证
http.interceptors.request.use(config=>{
    return config
}, e=>Promise.reject(e))

http.interceptors.response.use(res=>res.data,e=>{
    return Promise.reject(e)
})

export default http
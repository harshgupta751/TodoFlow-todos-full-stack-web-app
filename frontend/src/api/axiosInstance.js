import axios from 'axios'

const axiosInstance= axios.create({
    baseURL:  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
    withCredentials: true
})


axiosInstance.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem("token")
        if(token){
            config.headers.authorization=`Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)




export default axiosInstance
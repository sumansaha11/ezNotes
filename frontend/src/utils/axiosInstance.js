import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;

// import axios from "axios";
// import { Cookies } from "react-cookie";

// const cookies = new Cookies();

// const axiosInstance = axios.create({
//     baseURL: import.meta.env.VITE_BASE_URL,
//     timeout: 10000,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// axiosInstance.interceptors.request.use(
//     (config) => {
//         const accessToken = cookies.get('accessToken');
//         if (accessToken) {
//             config.headers.Authorization = `Bearer ${accessToken}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// export default axiosInstance;
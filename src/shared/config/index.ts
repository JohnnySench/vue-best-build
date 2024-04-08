import axios, {isAxiosError} from "axios";

const api = axios.create({
    baseURL: import.meta.env.BASE_URL,
    withCredentials: true,
})

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (isAxiosError(error) && error.response?.status === 401) {
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
)

export default api;
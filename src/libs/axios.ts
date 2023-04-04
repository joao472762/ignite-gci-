import axios from 'axios'
import { AppError } from '../utils/AppError';

export const api = axios.create({
    baseURL: 'http://localhost:3333'
})

api.interceptors.response.use((response) => response , (error) => {
    if(axios.isAxiosError(error)  && error.response && error.response.data){
        return Promise.reject(new AppError(error.response.data.error,error.response.status))
    }
    return Promise.reject(error)
});


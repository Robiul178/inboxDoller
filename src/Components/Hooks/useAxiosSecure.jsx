import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'https://earning-server.vercel.app'
    // baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const { logOutUser } = useAuth()
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use((config) => {
        config.headers.authorization = `Bearer ${localStorage.getItem('access-token')}`
        return config;

    }, (err) => {
        return Promise.reject(err)
    });


    //response
    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logOutUser()
            navigate('/singin')
        }
        return Promise.reject(status);
    });

    return axiosSecure
};

export default useAxiosSecure;
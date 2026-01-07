// src/api/privateApi.js
import axios from "axios";

const privateApi = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
});

privateApi.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

privateApi.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token")
            localStorage.removeItem("userId")

            window.location.href = "/login"
        }

        return Promise.reject(error)
    }
)

export default privateApi;

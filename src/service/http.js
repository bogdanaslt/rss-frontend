import config from '@/config/config'
import axios from "axios";

const instance = axios.create({
    baseURL: config.api_base,
    timeout: 10000,
    withCredentials: true
});

export default instance;
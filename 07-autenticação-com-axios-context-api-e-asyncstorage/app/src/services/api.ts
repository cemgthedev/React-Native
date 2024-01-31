import axios from "axios";

const api = axios.create({
    baseURL: 'http://237.84.2.178:3333'
});

export default api;
import axios from "axios";

const { EXPO_PUBLIC_BACKEND_URL: baseURL } = process.env;

const apiClient = axios.create({
    baseURL,
    responseEncoding: "utf8",
    headers: {
        "Content-type": "application/json",
    },
});

export default apiClient;

import axios from "axios";

const { EXPO_PUBLIC_BACKEND_URL } = process.env;

const apiClient = axios.create({
    baseURL: EXPO_PUBLIC_BACKEND_URL,
    responseEncoding: "utf8",
    headers: {
        "Content-type": "application/json",
    },
});

export default apiClient;

import {create, ApiErrorResponse, ApiOkResponse} from "apisauce";
import cache from "../utility/cache";


const apiClient=create({
    baseURL:"http://192.168.8.115:9000/api"
});

// Change the implementation of a preset function
const get=apiClient.get;

// Trying to modify the implementation of the get method
apiClient.get = async (url, params, axiosConfig) => {
    // Attempt to get data from cache first
    const cachedData = await cache.get(url);

    if (cachedData!=undefined) {
        const data=cachedData.data;
        return {ok: true,data: data};
    }

    // If not cached, make the API request+keep the original line
    const response = await get(url, params, axiosConfig);

    if (response.ok) {
        const data=response.data
        await cache.store(url, data);
    }

    return response;
};

export default apiClient;

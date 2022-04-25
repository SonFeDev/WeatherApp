import axios from "axios"
import { urls } from "./urls"

const weatherApi = {
    getWeather: (params) => {
        return axios.get(urls.weather, {
            params: {
                ...params,
                appid: 'c2ab6c0e983017cb096ed819c357cb19'
            }
        })
    },

    getCurrentLocation: async () => {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        return {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
        }
    },

}
export default weatherApi
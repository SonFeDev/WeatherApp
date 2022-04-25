import axios from "axios"
import { urls } from "./urls"
const cityApi = {
    getCity: (params) => {
        console.log(params);
        return axios.get(urls.city, {
            params: {
                ...params,
                _limit: '5'
            }
        })
    },

    getCityLocation: async () => {

    }




};
export default cityApi;
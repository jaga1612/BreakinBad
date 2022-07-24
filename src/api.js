import axios from "axios";


const BBApi = axios.create({
    baseURL:"https://www.breakingbadapi.com/api/"
})

export default BBApi;
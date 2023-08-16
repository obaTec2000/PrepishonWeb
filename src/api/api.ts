import axios from "axios";
import { getBaseURL } from "../utils/env";

console.log("Base URL: ", getBaseURL())

const api = axios.create({
    baseURL: getBaseURL()
})

export default api
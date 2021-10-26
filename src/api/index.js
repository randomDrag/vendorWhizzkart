import axios from "axios";

export const api = axios.create({

    baseURL : "https://heuristic-tereshkova.50-21-189-128.plesk.page/public/" ,
    responseType : 'json',
 
})
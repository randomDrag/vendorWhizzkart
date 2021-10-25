import axios from "axios";

export const api = axios.create({

    baseURL : "https://94c9-122-160-47-222.ngrok.io/" ,
    responseType : 'json',
 
})
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
 export const api = axios.create({

    baseURL : "https://heuristic-tereshkova.50-21-189-128.plesk.page/public/" ,
    responseType : 'json',
   
})



  // Set the AUTH token for any request
   api.interceptors.request.use(async function (config) {
    const token = await AsyncStorage.getItem('Token');
    // config.headers.Authorization =  token ? `Bearer ${token}` : '';
    config.headers.Authorization =  token ? `Bearer Ugg9fsE9490nydZIFYtFQYgUBMZ0U0HlAaLvzuHZ` : '';
    return config;
  });



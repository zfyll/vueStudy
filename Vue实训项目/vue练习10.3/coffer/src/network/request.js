import axios from "axios";
export function request (config){
 const instance = axios.create({
    baseURL:'http://www.kangliuyong.com:10002',
     timeout:5000
 })
 return instance(config)
}
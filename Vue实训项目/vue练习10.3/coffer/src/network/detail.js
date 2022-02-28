import { request } from "./request";
export function getDetail(pid){
    return request({
        method: "get",
        url: "/productDetail",
        params: {
          appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
          pid,
      }})
}
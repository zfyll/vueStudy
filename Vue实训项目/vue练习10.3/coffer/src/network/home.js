import { request } from "./request";
export function getHomeMultidata () {
    return request({
      method: "get",
      url: "/banner",
      params: {
        appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
      },
    })
}
export function getHomeProductdata () {
  return request({
    method: "get",
    url: "/typeProducts",
    params: {
      appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
      key: "isHot",
          value:1,
    },
  })
}
import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}

export function getHomeImage(url) {
  return request({
    url: url
  });
}

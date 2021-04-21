import axios from "axios";

// 最终使用，axios本身就是Promise
export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 8000
  });

  //   axios拦截器;
  instance.interceptors.request.use(
    config => {
      // console.log(config);
      return config;
    },
    err => {
      // console.log(err);
    }
  );

  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      // console.log(err);
    }
  );

  return instance(config);
}

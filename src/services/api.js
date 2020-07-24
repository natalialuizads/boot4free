import axios from "axios";

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/natalialuizas/boot4free/",
});

export default api;

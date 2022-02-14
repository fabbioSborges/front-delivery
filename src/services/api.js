import axios from "axios";

const api = axios.create({
  baseURL: "https://api-delivery-uespi.herokuapp.com",
});

export default api;

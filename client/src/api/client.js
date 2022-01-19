import axios from "axios";

const httpClient = axios.create({
  timeout: 5000,
  baseURL: "http://localhost:4000/api/v1/",
});

export default httpClient;

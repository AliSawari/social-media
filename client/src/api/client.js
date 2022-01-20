import axios from "axios";
const user = JSON.parse(localStorage.getItem("social-media-hamidreza"));
const httpClient = axios.create({
  timeout: 5000,
  baseURL: "http://localhost:4000/api/v1/",
  headers: {
    "X-AUTH-TOKEN": user,
  },
});

export default httpClient;

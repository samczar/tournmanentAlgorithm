import axios from "axios";

export const onSendAPI = axios.create({
  baseURL: "https://5f852307c29abd00161902db.mockapi.io/api"
});

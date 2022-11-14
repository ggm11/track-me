// vendors
import axios from "axios";
import { baseurl as baseURL } from "../constants/api";

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;

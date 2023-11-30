import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// axios.defaults.baseURL = `http://165.232.180.233/api/v1/`;

const AxiosInstance = axios.create({
  baseURL: `http://165.232.180.233/api/v1/`,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

// AxiosInstance.interceptors.request.use((config) => {
//   return config;
// });

export default AxiosInstance;

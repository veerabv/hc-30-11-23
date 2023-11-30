import AxiosInstance from "./Interceptor";

//  process.env.REACT_APP_API_URL;
export const apiUrl = "http://165.232.180.233/api/v1/";

// export const siteUrl = process.env.REACT_APP_API_SITE;

const Env = {
  async get(path, header) {
    const api = await AxiosInstance.get(`${apiUrl}${path}`, {
      // headers: {
      //   Authorization: `Bearer ${header}`,
      // },
    });
    return api;
  },

  async post(path, payload, header) {
    const api = await AxiosInstance.post(`${apiUrl}${path}`, payload, {
      // headers: {
      //   Authorization: `Bearer ${header}`,
      // },
    });
    return api;
  },

  async put(path, payload, header) {
    const api = await AxiosInstance.put(`${apiUrl}${path}`, payload, {
      // headers: {
      //   Authorization: `Bearer ${header}`,
      // },
    });
    return api;
  },

  async delete(path, header) {
    const api = await AxiosInstance.delete(`${apiUrl}${path}`, {
      // headers: {
      //   Authorization: `Bearer ${header}`,
      // },
    });
    return api;
  },
};

export default Env;

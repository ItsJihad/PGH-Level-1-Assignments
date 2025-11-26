import axios from "axios";
import useAuth from "./useAuth";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:3000"
});

const useAxios = () => {
  const { currentUser } = useAuth();

  AxiosInstance.interceptors.request.use(config => {
    config.headers.authorization = `bearer ${currentUser?.accessToken}`;
    
    return config;
  });

  return AxiosInstance;
};

export default useAxios;

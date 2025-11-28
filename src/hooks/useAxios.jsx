import axios from "axios";
import useAuth from "./useAuth";

const AxiosInstance = axios.create({
  baseURL: "https://ie-hub-backend.vercel.app"
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

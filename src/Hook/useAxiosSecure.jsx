import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://task-manager-server-livid.vercel.app',
  });

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;
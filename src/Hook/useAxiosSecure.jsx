import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://localhost/5000',
    timeout: 1000,
  });

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;
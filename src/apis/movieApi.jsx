import axios from "axios";

const API_KEY = "ae898899c4b983fa80f5dcf782a35aff"; 

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY, 
  },
});

export default axiosInstance;

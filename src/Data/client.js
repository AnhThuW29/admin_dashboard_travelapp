import axios from "axios";

// Cấu hình chung cho axios
const axiosClient = axios.create({
    baseURL: "http://10.10.41.95:9000/",
    headers: {
        "content-type": "application/json",
    },
});

//Xử lý response trả về
axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return error.response;
    }
);

export default axiosClient;

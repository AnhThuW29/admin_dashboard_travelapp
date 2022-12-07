import axios from "axios";

// Cấu hình chung cho axios
const axiosClient = axios.create({
    baseURL: "http://localhost:9000/",
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

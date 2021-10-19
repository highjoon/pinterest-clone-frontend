import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID ox7faZqheWDp_Wj5iYOCpVb6Yh_M51SKkG-3Yr6Azh4"
    }
})
import axios from "axios";

const instance = axios.create({
    baseURL: "http://13.125.174.214/",
    headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

export const apis = {
    getPin: (id) => instance.get(`view/detail/${id}`),
};

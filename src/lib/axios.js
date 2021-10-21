import axios from "axios";
import { getCookie } from "../shared/Cookie";

const instance = axios.create({
    baseURL: "http://13.125.174.214/",
    headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${getCookie("user_login")}`,
    },
});

export const apis = {
    getPin: (id) => instance.get(`view/detail/${id}`),
    searchPin: (word) => instance.get(`view/search/${word}`),
    getComment: (id) => instance.get(`comment/${id}`),
    addComment: (contents) => instance.post(`comment`, contents),
    editComment: (id, contents) => instance.patch(`comment/${id}`, contents),
    deleteComment: (id) => instance.delete(`comment/${id}`),
    toggleLike: (id) => instance.post(`comment/like/${id}`),
};

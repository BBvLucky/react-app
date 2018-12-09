import axios from "axios";

export const request = ({ url, method = "get", data }) => {
    return axios({
        method: method,
        url: `http://${window.location.hostname}:9001/${url}`,
        data
    });
};
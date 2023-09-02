import axios from "axios";

export const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character",
});

export const fetchData = async (route, params) => {
    try {
        const res = await api.get(route, { params });

        if (res.status !== 200) throw new Error();
        console.log(res.request.responseURL);

        return res;
    } catch (error) {
        //todo
        console.log(error);
    }
};

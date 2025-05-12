import axios from "axios";
import { setSessionData } from "./core/sStorage";

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const postRegister = async (entity: string, data: any) => {
    try {
        const response = await api.post(`/user/${entity}/register`, data);
        setSessionData('user', response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
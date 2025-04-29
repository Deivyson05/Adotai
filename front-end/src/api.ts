import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const postRegister = async (data: any) => {
    try {
        const response = await api.post('/register', data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const postRegister = async (data: any) => {
    try {
        const response = await api.post('/user/adopter/register', data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const submitWPGForm = async (data: {
    websiteCategory: string;
    styleType: string;
    websitePurpose: string;
}): Promise<any> => {
    const response = await apiClient.post('/your-endpoint', data);
    return response.data;
};

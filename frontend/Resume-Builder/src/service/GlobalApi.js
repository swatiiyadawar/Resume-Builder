import axios from 'axios';

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
});

const CreateNewResume = async(data) => {
    return axiosClient.post('/user-resumes', data)
        .then(response => response.data)
        .catch(error => {
            console.error('Error creating new resume:', error);
            throw error; 
        });
};

export default CreateNewResume;


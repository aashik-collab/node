import axios from 'axios';

const setAxiosBaseUrl = () => {
    axios.defaults.baseURL = 'http://localhost:5000';
};

export default setAxiosBaseUrl;

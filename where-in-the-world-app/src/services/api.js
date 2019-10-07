import axios from 'axios';

// Criando a API com o Axios
const api = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2/'
});

export default api;
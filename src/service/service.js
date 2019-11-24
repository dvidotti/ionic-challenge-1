import axios from 'axios';

export const service = axios.get(`https://images-api.nasa.gov/search?q=apollo`);
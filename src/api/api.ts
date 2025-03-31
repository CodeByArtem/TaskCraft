import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // теперь это должно работать
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log("API Base URL:", process.env.NEXT_PUBLIC_API_URL); // Для проверки

export default apiClient;

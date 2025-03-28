import axios from 'axios';

// Использование переменной окружения для бэкенда
const api = axios.create({
  baseURL: "NEXT_PUBLIC_BACKEND_URL", // Используем URL из .env
  withCredentials: true,
});

export default api;
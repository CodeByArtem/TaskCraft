import axios from 'axios';
import {API_BASE_URL} from '@/config/api';
// Использование переменной окружения для бэкенда
const api = axios.create({
  baseURL: API_BASE_URL, // Используем URL из .env
  withCredentials: true,
});

export default api;
import { API_BASE_URL } from '@/config/api';
import axios from 'axios';

// Использование переменной окружения для бэкенда
const api = axios.create({
  baseURL: API_BASE_URL, // Используем URL из .env
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

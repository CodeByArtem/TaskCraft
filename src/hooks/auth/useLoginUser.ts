import { useMutation } from '@tanstack/react-query';
import api from '@/api/api';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
  };
}

const loginUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await api.post('/auth/login', credentials); // Запрос на /auth/login на правильный сервер

  return response.data;
};

export const useLoginUser = () => {
  return useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: loginUser, // ✅ Передаем объект с настройками
  });
};

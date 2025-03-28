import { useMutation } from '@tanstack/react-query';
import { api } from '../api';

interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useRegister = () => {
  return useMutation<{ message: string }, Error, RegisterData>({
    mutationFn: async (userData: RegisterData) => {
      console.log('UserData', userData);
      const response = await api.post('auth/register', userData);
      console.log(response.data);
      return response.data;
    },
  });
};

interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  return useMutation<{ message: string }, Error, LoginData>({
    mutationFn: async (credentials: LoginData) => {
      const response = await api.post('auth/login', credentials);

      console.log(response.data);

      return response.data;
    },
  });
};

export const useLogout = () => {
  return useMutation<void, Error, { userId: string }>({
    mutationFn: async ({ userId }) => {
      await api.post(`auth/logout/${userId}`);
    },
  });
};

interface RefreshResponse {
  access_token: string;
}

export const useRefreshToken = () => {
  return useMutation<
    RefreshResponse,
    Error,
    { userId: string; refresh_token: string }
  >({
    mutationFn: async ({ userId, refresh_token }) => {
      const response = await api.post(`/auth/refresh/${userId}`, {
        refresh_token,
      });
      return response.data;
    },
  });
};

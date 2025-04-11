import { User } from '@/types/user';
import api from '../api';

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const registerUser = async (userData: RegisterData): Promise<User> => {
  const response = await api.post<User>('auth/register', userData);

  console.log('User', response.data);
  return response.data;
};

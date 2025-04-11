import { User } from '@/types/user';
import api from '../../api';

export const getCurrentUser = async (): Promise<User> => {
  const response = await api.get<User>('/users/me');

  console.log('User', response.data);
  return response.data;
};

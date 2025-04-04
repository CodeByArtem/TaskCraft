import api from '../api';

interface User {
  id: string;
  username: string;
  email: string;
}

export const getCurrentUser = async (): Promise<User> => {
  const response = await api.get<User>('/users/me');

  console.log('User', response.data);
  return response.data;
};

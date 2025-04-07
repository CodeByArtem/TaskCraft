import api from '../api';

interface CurrentUser {
  id: string;
  username: string;
  email: string;
}

export const getCurrentUser = async (): Promise<CurrentUser> => {
  const response = await api.get<CurrentUser>('/users/me');

  console.log('User', response.data);
  return response.data;
};

import api from '../api';

interface User {
  id: string;
  username: string;
  email: string;
}

export const getUser = async (userId: string): Promise<User> => {
  const response = await api.get<User>(`/users/${userId}`);

  console.log('User', response.data);
  return response.data;
};

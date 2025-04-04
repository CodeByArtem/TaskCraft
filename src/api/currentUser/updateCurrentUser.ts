import api from '../api';

export interface User {
  id: string;
  username: string;
  email: string;
}
export interface UpdateUserData {
  username?: string;
  email?: string;
  password?: string;
}

export const updateCurrentUser = async (data: UpdateUserData) => {
  const response = await api.patch<User>('/users/me', data);
  return response.data;
};

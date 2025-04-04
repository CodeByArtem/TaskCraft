import api from '@/api/api';

export const deleteCurrentUser = async (): Promise<{ message: string }> => {
  const response = await api.delete<{ message: string }>('/users/me');
  console.log('User deleted successfully');
  return response.data;
};

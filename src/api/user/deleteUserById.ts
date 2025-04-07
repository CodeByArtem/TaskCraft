import api from '../api';
export interface DeleteData {
  userId: string;
}

export interface DeleteResponse {
  message: string;
}
export const deleteUser = async ({
  userId,
}: DeleteData): Promise<DeleteResponse> => {
  await api.delete<DeleteResponse>(`/users/${userId}`);

  console.log('User deleted successfully');
  return { message: 'User deleted successfully' };
};

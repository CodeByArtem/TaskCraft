import api from '../api';
export interface DeleteData {
  userId: string;
}

export const deleteUser = async ({ userId }: DeleteData): Promise<void> => {
  await api.delete<void>(`/users/${userId}`);

  console.log('User deleted');
};

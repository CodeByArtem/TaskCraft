import api from '../api';

export interface UpdateUserData {
  username?: string;
  email?: string;
  password?: string;
}
export interface UpdateUserParams {
  userId: string;
  data: UpdateUserData;
}

export const updateUser = async ({
  userId,
  data,
}: UpdateUserParams): Promise<UpdateUserData> => {
  const response = await api.patch<UpdateUserData>(`/users/${userId}`, data);

  console.log('updateUser', response.data);
  return response.data;
};

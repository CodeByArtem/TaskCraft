import api from '../../api';

export interface UpdateCurrentUserData {
  username?: string;
  email?: string;
  password?: string;
}
export interface UpdateCurrentUserResponse {
  id: string;
  username: string;
  email: string;
}

export const updateCurrentUser = async (
  data: UpdateCurrentUserData,
): Promise<UpdateCurrentUserResponse> => {
  const response = await api.patch<UpdateCurrentUserResponse>(
    '/users/me',
    data,
  );
  return response.data;
};

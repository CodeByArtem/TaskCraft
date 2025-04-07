import api from '@/api/api';

export interface DeleteCurrentUserResponse {
  message: string;
}

export const deleteCurrentUser =
  async (): Promise<DeleteCurrentUserResponse> => {
    const response = await api.delete<DeleteCurrentUserResponse>('/users/me');
    console.log('User deleted successfully');
    return response.data;
  };

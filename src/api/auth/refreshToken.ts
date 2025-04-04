// import { useMutation } from '@tanstack/react-query';
import api from '../api';

export interface RefreshData {
  email: string;
  refresh_token: string;
}
export interface RefreshResponse {
  access_token: string; //новый токен для запросов.
  expires_in: number; //через сколько секунд он истечёт
}

export const refreshToken = async (
  data: RefreshData,
): Promise<RefreshResponse> => {
  const response = await api.post<RefreshResponse>('/auth/refresh', {
    email: data.email,
    refreshToken: data.refresh_token,
  });

  console.log('RefreshResponse', response.data);
  return response.data;
};

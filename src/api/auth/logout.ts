import api from '../api';

export interface LogoutData {
  userId: string;
}

export const logoutUser = async ({ userId }: LogoutData): Promise<void> => {
  await api.post<void>(`auth/logout/${userId}`);
};

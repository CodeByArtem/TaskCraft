import api from '../api';

export interface ResetPasswordData {
  token: string;
  newPassword: string;
}
export const resetPassword = async (data: ResetPasswordData): Promise<void> => {
  const { token, newPassword } = data;
  await api.post(`/auth/reset-password?token=${token}`, { newPassword });
};

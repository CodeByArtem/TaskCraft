import api from '../api';

export interface requestPasswordResetData {
  email: string;
}

export const requestPasswordReset = async (
  data: requestPasswordResetData,
): Promise<void> => {
  const response = await api.post('/auth/request-password-reset', data);
  console.log('responseRequestPswReset', response.data);

  return response.data;
};

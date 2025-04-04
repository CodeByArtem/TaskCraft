import api from '../api';

export interface ActivationResponse {
  message: string;
}

export const activateUser = async (
  token: string,
): Promise<ActivationResponse> => {
  const response = await api.get<ActivationResponse>(`users/activate/${token}`);
  console.log('Activate user:', response.data);

  return response.data;
};

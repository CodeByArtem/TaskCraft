import api from '../api';

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface RegisterResponse {
  user: { id: string; username: string; email: string };
}

export const registerUser = async (
  userData: RegisterData,
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>('auth/register', userData);

  console.log('RegisterResponse', response.data);
  return response.data;
};

import api from '../api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
}

export const loginUser = async (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/auth/login', credentials);
  console.log('LoginResponse', response.data);
  return response.data;
};

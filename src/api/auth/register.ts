import api from '../api';

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface RegisterResponse {
  user: {
    id: string;
    username: string;
    email: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    googleId: string | null;
    lastLogin: string | null;
    notifications: boolean;
    passwordResetToken: string | null;
    refreshToken: string | null;
    theme: 'light' | 'dark'; // если только два варианта;
  };
}

export const registerUser = async (
  userData: RegisterData,
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>('auth/register', userData);

  console.log('RegisterResponse', response.data);
  return response.data;
};

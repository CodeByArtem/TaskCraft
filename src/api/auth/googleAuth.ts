import api from '../api';

export interface GoogleAuthResponse {
  authUrl: string;
}

export const googleAuth = async (): Promise<void> => {
  try {
    const response = await api.get<GoogleAuthResponse>('auth/google');
    window.location.href = response.data.authUrl;
  } catch (error) {
    console.error('Google Authorization error:', error);
    throw error;
  }
};

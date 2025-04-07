import api from '../api';

export interface GoogleCallbackResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}

export const googleCallback = async (
  code: string,
): Promise<GoogleCallbackResponse> => {
  const response = await api.get<GoogleCallbackResponse>(
    `/auth/google/callback?code=${code}`,
  );
  console.log('Google OAuth Callback Response:', response.data);
  return response.data;
};

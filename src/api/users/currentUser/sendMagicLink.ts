import api from '@/api/api';

export interface MagicLinkRequestData {
  email: string;
}
export interface MagicLinkResponse {
  message: string;
}

export const sendMagicLink = async (data: MagicLinkRequestData) => {
  const response = await api.post<MagicLinkResponse>(
    '/auth/send-magic-link',
    data,
  );
  console.log('Magic Link Response:', response.data);
  return response.data;
};

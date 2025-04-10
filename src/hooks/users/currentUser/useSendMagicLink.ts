import {
  MagicLinkRequestData,
  sendMagicLink,
} from '@/api/users/currentUser/sendMagicLink';
import { useMutation } from '@tanstack/react-query';

export const useSendMagicLink = () => {
  return useMutation({
    mutationFn: (data: MagicLinkRequestData) => sendMagicLink(data),
  });
};

import { deleteCurrentUser } from '@/api/currentUser/deleteCurrentUser';
import { useMutation } from '@tanstack/react-query';

export const useDeleteCurrentUser = () => {
  return useMutation({
    mutationFn: deleteCurrentUser,
  });
};

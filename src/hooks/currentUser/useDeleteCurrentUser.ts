import {
  deleteCurrentUser,
  DeleteCurrentUserResponse,
} from '@/api/currentUser/deleteCurrentUser';
import { useMutation } from '@tanstack/react-query';

export const useDeleteCurrentUser = () => {
  return useMutation<DeleteCurrentUserResponse, Error, void>({
    mutationFn: deleteCurrentUser,
  });
};

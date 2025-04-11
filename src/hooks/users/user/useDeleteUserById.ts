import {
  deleteUser,
  DeleteData,
  DeleteResponse,
} from '@/api/users/user/deleteUserById';
import { useMutation } from '@tanstack/react-query';

export const useDeleteUser = () => {
  return useMutation<DeleteResponse, Error, DeleteData>({
    mutationFn: deleteUser,
  });
};

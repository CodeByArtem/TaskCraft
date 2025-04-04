import { deleteUser, DeleteData, DeleteResponse } from '@/api/users/deleteUser';
import { useMutation } from '@tanstack/react-query';

export const useDeleteUser = () => {
  return useMutation<DeleteResponse, Error, DeleteData>({
    mutationFn: deleteUser,
  });
};

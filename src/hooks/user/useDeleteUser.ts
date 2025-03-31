import { deleteUser, DeleteData } from '@/api/user/deleteUser';
import { useMutation } from '@tanstack/react-query';

export const useDeleteUser = () => {
  return useMutation<void, Error, DeleteData>({
    mutationFn: deleteUser,
  });
};

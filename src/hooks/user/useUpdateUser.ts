import {
  updateUser,
  UpdateUserData,
  UpdateUserParams,
} from '@/api/user/updateUser';
import { useMutation } from '@tanstack/react-query';

export const useUpdateUser = () => {
  return useMutation<UpdateUserData, Error, UpdateUserParams>({
    mutationFn: updateUser,
  });
};

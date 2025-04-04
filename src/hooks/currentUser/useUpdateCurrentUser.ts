import {
  updateCurrentUser,
  UpdateUserData,
  User,
} from '@/api/currentUser/updateCurrentUser';
import { useMutation } from '@tanstack/react-query';

export const useUpdateCurrentUser = () => {
  return useMutation<User, Error, UpdateUserData>({
    mutationFn: updateCurrentUser,
  });
};

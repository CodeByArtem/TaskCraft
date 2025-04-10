import {
  updateCurrentUser,
  UpdateCurrentUserData,
  UpdateCurrentUserResponse,
} from '@/api/users/currentUser/updateCurrentUser';
import { useMutation } from '@tanstack/react-query';

export const useUpdateCurrentUser = () => {
  return useMutation<UpdateCurrentUserResponse, Error, UpdateCurrentUserData>({
    mutationFn: updateCurrentUser,
  });
};

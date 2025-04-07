import {
  updateCurrentUser,
  UpdateCurrentUserData,
  UpdateCurrentUserResponse,
} from '@/api/currentUser/updateCurrentUser';
import { useMutation } from '@tanstack/react-query';

export const useUpdateCurrentUser = () => {
  return useMutation<UpdateCurrentUserResponse, Error, UpdateCurrentUserData>({
    mutationFn: updateCurrentUser,
  });
};

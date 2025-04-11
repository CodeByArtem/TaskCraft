import { deleteBoard, DeleteBoardData } from '@/api/boards/deleteBoard';
import { useMutation } from '@tanstack/react-query';

export const useDeleteBoard = () => {
  useMutation({
    mutationFn: (data: DeleteBoardData) => deleteBoard(data),
  });
};

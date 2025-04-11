import { createBoard, CreateBoardData } from '@/api/boards/createBoard';

import { useMutation } from '@tanstack/react-query';

export const useCreateBoard = () => {
  return useMutation({
    mutationFn: (data: CreateBoardData) => createBoard(data),
  });
};

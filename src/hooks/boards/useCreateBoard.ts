import { createBoard, CreateBoardData } from '@/api/boards/createBoard';
import { Board } from '@/types/board';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const useCreateBoard = () => {
  const queryClient = useQueryClient();
  return useMutation<Board, Error, CreateBoardData>({
    mutationFn: (data: CreateBoardData) => createBoard(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boards'] });
      toast.success('Board successfully created!');
    },
    onError: () => {
      toast.error('Error creating board');
    },
  });
};

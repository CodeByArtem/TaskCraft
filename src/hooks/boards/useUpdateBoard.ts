import { updateBoard, UpdateBoardData } from '@/api/boards/updateBoard';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateBoardData) => updateBoard(data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['board', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['boards'] });
    },
  });
};

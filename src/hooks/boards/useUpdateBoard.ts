import { updateBoard, UpdateBoardData } from '@/api/boards/updateBoard';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const useUpdateBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateBoardData) => updateBoard(data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['board', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['boards'] });
      toast.success('Board updated!');
    },
    onError: () => {
      toast.error('Error updating board');
    },
  });
};

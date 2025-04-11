import { deleteBoard, DeleteBoardData } from '@/api/boards/deleteBoard';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const useDeleteBoard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: DeleteBoardData) => deleteBoard(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boards'] });
      toast.success('Доска удалена успешно!');
    },
    onError: () => {
      toast.error('Ошибка при удалении доски');
    },
  });
};

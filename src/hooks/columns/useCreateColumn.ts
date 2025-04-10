import { CreateColumnData, createColumn } from '@/api/columns/createColumn';
import { useMutation } from '@tanstack/react-query';

export const useCreateColumn = () => {
  return useMutation({
    mutationFn: (data: CreateColumnData) => createColumn(data),
  });
};

import { getBoardById } from '@/api/boards/getBoardById';
import { useQuery } from '@tanstack/react-query';

export const useGetBoardById = (id: string) => {
  return useQuery({
    queryKey: ['board', id],
    queryFn: () => getBoardById(id),
    enabled: !!id, // запрос только если id есть
  });
};

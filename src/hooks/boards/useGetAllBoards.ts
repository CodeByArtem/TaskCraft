import { getAllBoards } from '@/api/boards/getAllBoards';
import { useQuery } from '@tanstack/react-query';

export const useGetAllBoards = () => {
  return useQuery({
    queryKey: ['boards'],
    queryFn: getAllBoards,
  });
};

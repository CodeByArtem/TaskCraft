import { getAllBoards } from '@/api/boards/getAllBoards';
import { useQuery } from '@tanstack/react-query';

export const useGetAllBoards = () => {
  useQuery({
    queryKey: ['boards'],
    queryFn: getAllBoards,
  });
};

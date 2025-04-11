import { Board } from '@/types/board';
import api from '../api';

export interface UpdateBoardData {
  id: string;
  title?: string;
  description?: string;
}

export const updateBoard = async ({
  id,
  title,
  description,
}: UpdateBoardData): Promise<Board> => {
  const response = await api.put<Board>(`/boards/${id}`, {
    title,
    description,
  });
  return response.data;
};

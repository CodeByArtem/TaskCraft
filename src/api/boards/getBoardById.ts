import { Board } from '@/types/board';
import api from '../api';

export const getBoardById = async (id: string): Promise<Board> => {
  const response = await api.get<Board>(`/boards/${id}`);
  return response.data;
};

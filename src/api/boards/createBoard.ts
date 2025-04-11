import { Board } from '@/types/board';
import api from '../api';

export interface CreateBoardData {
  title: string;
  description: string;
  userId: string;
}

export const createBoard = async (data: CreateBoardData): Promise<Board> => {
  const response = await api.post<Board>('/boards', data);
  console.log('Board created:', response.data);
  return response.data;
};

import { Board } from '@/types/board';
import api from '../api';

export const getAllBoards = async (): Promise<Board[]> => {
  const response = await api.get<Board[]>('/boards');
  return response.data;
};

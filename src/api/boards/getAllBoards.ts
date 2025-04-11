import { Board } from '@/types/board';
import api from '../api';

export const getAllBoards = async (): Promise<Board[]> => {
  const response = api.get<Board[]>('/boards');
  return (await response).data;
};

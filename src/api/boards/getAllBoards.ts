import api from '../api';

export interface Board {
  id: string;
  title: string;
  description: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export const getAllBoards = async (): Promise<Board[]> => {
  const response = api.get<Board[]>('/boards');
  return (await response).data;
};

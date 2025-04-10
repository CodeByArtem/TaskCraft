import api from '../api';

export interface Board {
  id: string;
  title: string;
  description: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export const getBoardById = async (id: string): Promise<Board> => {
  const response = await api.get<Board>(`/boards/${id}`);
  return response.data;
};

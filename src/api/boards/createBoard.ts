import api from '../api';

export interface CreateBoardData {
  title: string;
  description: string;
  userId: string;
}
export interface CreateBoardResponse {
  id: string;
  title: string;
  description: string;
  userId: string;
  createdAt?: string;
  updatedAt?: string;
}

export const createBoard = async (
  data: CreateBoardData,
): Promise<CreateBoardResponse> => {
  const response = await api.post<CreateBoardResponse>('/boards', data);
  console.log('Board created:', response.data);
  return response.data;
};

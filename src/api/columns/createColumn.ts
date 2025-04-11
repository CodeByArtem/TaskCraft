import api from '../api';

export interface CreateColumnData {
  title: string;
  order: string;
  boardId: string;
}
export interface CreateColumnResponse {
  id: string;
  title: string;
  order: string;
  boardId: string;
  createdAt?: string;
  updatedAt?: string;
}

export const createColumn = async (
  data: CreateColumnData,
): Promise<CreateColumnResponse> => {
  const response = await api.post<CreateColumnResponse>('/columns', data);
  console.log('Column created:', response.data);
  return response.data;
};

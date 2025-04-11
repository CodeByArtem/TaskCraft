import api from '../api';

export interface UpdateBoardData {
  id: string;
  title?: string;
  description?: string;
}
export interface UpdateBoardResponse {
  id: string;
  title: string;
  description: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export const updateBoard = async ({
  id,
  title,
  description,
}: UpdateBoardData): Promise<UpdateBoardResponse> => {
  const response = api.put<UpdateBoardResponse>(`/boards/${id}`, {
    title,
    description,
  });
  return (await response).data;
};

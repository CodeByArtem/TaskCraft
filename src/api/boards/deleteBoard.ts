import api from '../api';
export interface DeleteBoardData {
  id: string;
}
export interface DeleteBoardResponse {
  message: string;
}
export const deleteBoard = async (
  data: DeleteBoardData,
): Promise<DeleteBoardResponse> => {
  const { id } = data;
  const response = await api.delete<DeleteBoardResponse>(`/boards/${id}`);
  return response.data;
};

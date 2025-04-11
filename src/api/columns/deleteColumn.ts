import api from '../api';

export interface DeleteColumnData {
  id: string;
}
export interface DeleteColumnResponse {
  message: string;
}
export const deleteColumn = async (
  data: DeleteColumnData,
): Promise<DeleteColumnResponse> => {
  const { id } = data;
  const response = await api.delete<DeleteColumnResponse>(`/columns/${id}`);
  return response.data;
};

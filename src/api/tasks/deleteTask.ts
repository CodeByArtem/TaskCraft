import api from '../api';

export interface DeleteTaskData {
  id: string;
}
export interface DeleteTaskResponse {
  message: string;
}
export const deleteTask = async (
  data: DeleteTaskData,
): Promise<DeleteTaskResponse> => {
  const { id } = data;
  const response = await api.delete<DeleteTaskResponse>(`/tasks/${id}`);
  return response.data;
};

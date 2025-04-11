import api from '../api';

export interface CreateTaskData {
  title: string;
  description: string;
  columnId: string;
}
export interface CreateTaskResponse {
  id: string;
  title: string;
  description: string;
  columnId: string;
  createdAt?: string;
  updatedAt?: string;
}

export const createTask = async (
  data: CreateTaskData,
): Promise<CreateTaskResponse> => {
  const response = await api.post<CreateTaskResponse>('/tasks', data);
  console.log('Task created:', response.data);
  return response.data;
};

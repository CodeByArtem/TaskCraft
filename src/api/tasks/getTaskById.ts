import { Task } from '@/types/task';
import api from '../api';

export const getTaskById = async (id: string): Promise<Task> => {
  const response = await api.get<Task>(`/tasks/${id}`);
  return response.data;
};

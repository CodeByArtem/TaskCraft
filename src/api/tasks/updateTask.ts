import { Task } from '@/types/task';
import api from '../api';

export interface UpdateTaskData {
  id: string;
  title?: string;
  description?: string;
}

export const updateTask = async ({
  id,
  title,
  description,
}: UpdateTaskData): Promise<Task> => {
  const response = await api.put<Task>(`/tasks/${id}`, {
    title,
    description,
  });
  return response.data;
};

import { Task } from '@/types/task';
import api from '../api';

export interface CreateTaskData {
  title: string;
  description: string;
  columnId: string;
}

export const createTask = async (data: CreateTaskData): Promise<Task> => {
  const response = await api.post<Task>('/tasks', data);
  console.log('Task created:', response.data);
  return response.data;
};

import { Task } from '@/types/task';
import api from '../api';

export const getAllTasks = async (): Promise<Task[]> => {
  const response = await api.get<Task[]>('/tasks');
  return response.data;
};

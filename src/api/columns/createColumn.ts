import { Column } from '@/types/column';
import api from '../api';

export interface CreateColumnData {
  title: string;
  order: string;
  boardId: string;
}

export const createColumn = async (data: CreateColumnData): Promise<Column> => {
  const response = await api.post<Column>('/columns', data);
  console.log('Column created:', response.data);
  return response.data;
};

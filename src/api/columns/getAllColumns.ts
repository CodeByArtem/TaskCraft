import api from '../api';
import { Column } from '@/types/column';

export const getAllColumns = async (): Promise<Column[]> => {
  const response = await api.get<Column[]>('/columns');
  return response.data;
};

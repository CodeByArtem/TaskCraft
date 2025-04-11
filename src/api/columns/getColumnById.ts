import { Column } from '@/types/column';
import api from '../api';

export const getColumnById = async (id: string): Promise<Column> => {
  const response = await api.get<Column>(`/columns/${id}`);
  return response.data;
};

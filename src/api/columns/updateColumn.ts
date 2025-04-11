import { Column } from '@/types/column';
import api from '../api';

export interface UpdateColumnData {
  id: string;
  title?: string;
  order?: number;
}

export const updateColumn = async ({
  id,
  title,
  order,
}: UpdateColumnData): Promise<Column> => {
  const response = await api.put<Column>(`/columns/${id}`, {
    title,
    order,
  });
  return response.data;
};

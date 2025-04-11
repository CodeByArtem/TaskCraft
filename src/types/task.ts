import { Column } from './column';

export interface Task {
  id: string;
  title: string;
  description?: string;
  columnId: string;
  createdAt: string;
  updatedAt: string;
  column: Column;
}

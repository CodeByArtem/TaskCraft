import { Column } from './column';
import { User } from './user';

export interface Board {
  id: string;
  title: string;
  description?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  columns: Column[];
}

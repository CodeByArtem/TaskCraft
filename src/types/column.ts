import { Board } from './board';
import { Task } from './task';

export interface Column {
  id: string;
  title: string;
  order: number; //тип уточняем
  boardId: string;
  createdAt: string;
  updatedAt: string;
  board: Board;
  tasks: Task[];
}

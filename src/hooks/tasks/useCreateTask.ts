import { createTask, CreateTaskData } from '@/api/tasks/createTask';
import { useMutation } from '@tanstack/react-query';

export const useCreateTask = () => {
  return useMutation({
    mutationFn: (data: CreateTaskData) => createTask(data),
  });
};

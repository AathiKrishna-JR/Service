import { InjectionToken } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

type TaskStatusOption = {
  value : 'open' | 'in-progress' | 'done'
  taskStatus : TaskStatus,
  text: string;
}[];

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOption>('Task-Status-Option');
export const TaskStatusOption : TaskStatusOption = [{
  value : 'open',
  taskStatus : 'OPEN',
  text: 'Open'
},
{
  value : 'in-progress',
  taskStatus : 'IN_PROGRESS',
  text: 'In-Progress'
},
{
  value : 'done',
  taskStatus : 'DONE',
  text: 'Completed'
}]
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

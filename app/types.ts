export type TaskStatus = 'To do' | 'In progress' | 'Under review' | 'Finished';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'Urgent' | 'Medium' | 'Low';
  date: string;
  timeAgo: string;
}
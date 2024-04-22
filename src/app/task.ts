export interface Task {
  id: number;
  taskName: string;
  description: string;
  modifiedDate: Date | number | string;
  createdDate: Date | number | string;
}

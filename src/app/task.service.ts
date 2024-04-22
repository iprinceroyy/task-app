import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskList: Task[] = [];

  constructor() {}

  getAllTasks(): Task[] {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
  }

  getTaskById(id: number): Task | undefined {
    const tasks = this.getAllTasks();
    return tasks.find((task) => task.id === id);
  }

  addTask(taskName: string, description: string) {
    this.taskList.push({
      id: Math.floor(Math.random() * 1000),
      taskName: taskName,
      description: description,
      modifiedDate: new Date().toDateString(),
      createdDate: new Date().toDateString(),
    });
    this.saveTask(this.taskList);
  }

  deleteTask(id?: number) {
    let tasks = this.getAllTasks();
    tasks = tasks.filter((task) => task.id !== id);
    this.saveTask(tasks);
  }

  saveTask(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

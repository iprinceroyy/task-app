import { Component, inject } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [CommonModule, TaskComponent, RouterLink, RouterOutlet],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss',
})
export class TasksListComponent {
  taskList: Task[] = [];
  taskService: TaskService = inject(TaskService);

  constructor() {
    this.taskList = this.taskService.getAllTasks();
  }
}

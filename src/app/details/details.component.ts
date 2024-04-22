import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  taskService = inject(TaskService);
  task: Task | undefined;
  router: Router | undefined;

  constructor() {
    const taskId = Number(this.route.snapshot.params['id']);
    this.task = this.taskService.getTaskById(taskId);
  }

  handleDelete(taskId: number | undefined): void {
    this.taskService.deleteTask(taskId);
  }
}

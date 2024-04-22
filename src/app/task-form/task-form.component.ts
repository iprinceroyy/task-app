import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  constructor(private router: Router) {}

  taskService = inject(TaskService);

  applyForm = new FormGroup({
    taskName: new FormControl(''),
    description: new FormControl(''),
  });

  submitTask() {
    this.taskService.addTask(
      this.applyForm.value.taskName ?? '',
      this.applyForm.value.description ?? ''
    );

    this.applyForm.reset();
    this.router.navigate(['/']);
  }
}

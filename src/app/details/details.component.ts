import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  taskService = inject(TaskService);
  task: Task | undefined;

  isEditMode = false;

  constructor(private router: Router) {
    const taskId = Number(this.route.snapshot.params['id']);
    this.task = this.taskService.getTaskById(taskId);
  }

  applyForm = new FormGroup({
    description: new FormControl(''),
  });

  submitTask(id: number | undefined) {
    this.taskService.editTask(id, this.applyForm.value.description ?? '');
    this.toggleEditMode();
  }

  handleDelete(taskId: number | undefined): void {
    this.taskService.deleteTask(taskId);
    this.router.navigate(['/']);
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  handleEdit() {
    this.toggleEditMode();
  }

  handleBack() {
    this.router.navigate(['/']);
  }
}

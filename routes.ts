import { Routes } from '@angular/router';
import { TasksListComponent } from './src/app/tasks-list/tasks-list.component';
import { DetailsComponent } from './src/app/details/details.component';
import { TaskFormComponent } from './src/app/task-form/task-form.component';

const routeConfig: Routes = [
  {
    path: '',
    component: TasksListComponent,
    title: 'Task list page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Task details',
  },
  {
    path: 'create',
    component: TaskFormComponent,
    title: 'Task form',
  },
];

export default routeConfig;

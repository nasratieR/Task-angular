import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './task/task-view/task-view.component';
import { UserViewComponent } from './user/user-view/user-view.component';


const routes: Routes =[
  {
    path: 'users',
    component: UserViewComponent
  },
  {
    path: 'tasks',
    component: TaskViewComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRootingModule { }

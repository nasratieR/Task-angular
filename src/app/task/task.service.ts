import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Task } from '../interfaces/task.interface';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiHost = 'https://jsonplaceholder.typicode.com/';

  private tasksCache$: Observable<Task[]> = of([]);

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {

    if (this.tasksCache$) {
      this.tasksCache$ = this.http.get<Task[]>(`${this.apiHost}/todos`).pipe(
        shareReplay(1)
      )
      
    }

    return this.tasksCache$;
  }
   
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiHost}/todos`, task).pipe(
      tap(()=>{
      this.tasksCache$ = of([]);
    })
    )
  }  
}

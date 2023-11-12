import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {

  taskForm: FormGroup;
  errorMessage: string = "";

  constructor(private fb: FormBuilder, private taskService: TaskService){
    this.taskForm=this.fb.group({
      userId: [1, Validators.required],
      title: ['', Validators.required],
      completed: new FormControl(false),
      
    }) 
  }
  
  onSubmit(){
    try {
      console.log("Form is submited");
      const taskValues = this.taskForm.value;

      this.taskService.createTask(taskValues).subscribe((response) =>{
        console.log('task created succesfuly');
        console.log(response);
      }),
      console.error('there is an error');
      this.errorMessage = "Something went wrong";
      
    } catch (error) {
      console.log("catch error")
      this.errorMessage = "Something went wrong";
    }
      
    }
}

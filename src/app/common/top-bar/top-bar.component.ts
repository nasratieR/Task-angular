import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private router: Router){}

  toHome(){
    this.router.navigate(['/']);
  }
  toUsers(){
    this.router.navigate(['/users']);
  }
  toTasks(){
    this.router.navigate(['/tasks']);
  }

}

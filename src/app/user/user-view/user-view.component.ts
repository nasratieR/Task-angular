import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  users: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'email'];

  constructor(private userService: UserService) {}
  
  ngOnInit(): void { 
    this.userService.getUser().subscribe( (users: User[]) => {
      this.users = users;
    })
  }
}

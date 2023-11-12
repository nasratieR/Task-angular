import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { User} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private jsonFile = 'assets/users.json';
  
  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.jsonFile)
  }

}

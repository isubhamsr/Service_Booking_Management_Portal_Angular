import { Component, Input, OnInit } from '@angular/core';
import { User } from '../Model/User'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users!: User[];
  url = 'https://localhost:7002/api/User';
  error = false;
  message!: string;
  isSubmit = false;
  status!: null;
  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    this.isSubmit = true;
    this.http
      .get(this.url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        }),
      })
      .subscribe(
        (response) => {
          const error = (<any>response).error;
          if (error) {
            this.error = true;
            this.isSubmit = false;
            this.message = (<any>response).message;
            
          } else {
            this.error = false;
            // this.toastr.success("Logged In successfully");
            this.isSubmit = false;
            this.users = (<any>response).data;
            console.log((<any>response).data);
            console.log(this.users);
            
          }
        },
        (err) => {
          this.isSubmit = false;
          this.message = "Session Expired, You need to login";
          this.status = err.status
        }
      );
  }

}

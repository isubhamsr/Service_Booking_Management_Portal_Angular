import { Component, OnInit } from '@angular/core';
import { ServiceReq } from '../Model/ServiceReq'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-bystatus',
  templateUrl: './bystatus.component.html',
  styleUrls: ['./bystatus.component.css']
})
export class BystatusComponent implements OnInit {

  serviceReqs!: ServiceReq[];
  pendingurl = 'https://localhost:7096/api/ServiceReq/GetByStatus/pending';
  resolvedurl = 'https://localhost:7096/api/ServiceReq/GetByStatus/resolved';
  url = 'https://localhost:7096/api/ServiceReq'
  error = false;
  message!: string;
  isSubmit = false;
  status!: null;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.onPending()
  }

  onPending(){
    this.isSubmit = true;
    this.http
      .get(this.pendingurl, {
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
            this.serviceReqs = (<any>response).data;
            
          }
        },
        (err) => {
          this.isSubmit = false;
          this.message = "Session Expired, You need to login";
          this.status = err.status
        }
      ); 
  }

  onResolved(){
    this.isSubmit = true;
    this.http
      .get(this.resolvedurl, {
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
            this.serviceReqs = (<any>response).data;
            console.log(this.serviceReqs);
            
          }
        },
        (err) => {
          this.isSubmit = false;
          this.message = "Session Expired, You need to login";
          this.status = err.status
        }
      ); 
  }

  onDelete(id: number){
    this.isSubmit = true;
    this.http
      .delete(`${this.url}/${id}`, {
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
            this.ngOnInit()
            
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

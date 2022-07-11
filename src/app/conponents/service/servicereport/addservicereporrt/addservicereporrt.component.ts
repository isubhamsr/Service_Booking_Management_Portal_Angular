import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-addservicereporrt',
  templateUrl: './addservicereporrt.component.html',
  styleUrls: ['./addservicereporrt.component.css']
})
export class AddservicereporrtComponent implements OnInit {

  url = 'https://localhost:7096/api/ServiceReq/Report';
  booking = 'https://localhost:7096/api/ServiceReq';
  error = false;
  message!: string;
  isSubmit = false;
  status!: null;


  Id!: number
    ReportDate!: string
    ActionTaken!: string
    DiagnosisDetails!: string
    IsPaid!: string
    VisitFees!: number
    RepairDetails!: string
    SerReqId!: number
    ServiceType!: string

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token')
    if(token !== null){
      let jwt = JSON.parse(atob(token.split('.')[1]))
      let id = parseInt(jwt.Id)
      this.getAllServiceReqs(id)
    }
    else{
      this.error = true
      this.message = "Token not found"
    }
  }

  onSubmit(){
    console.log('ok');
    this.isSubmit = true;
    const repoprt = {
    ReportDate: this.ReportDate,
    ActionTaken: this.ActionTaken === "yes" ? true : false,
    DiagnosisDetails: this.DiagnosisDetails,
    IsPaid: this.IsPaid === "yes" ? true : false,
    VisitFees: this.VisitFees,
    RepairDetails: this.RepairDetails,
    SerReqId: this.SerReqId,
    ServiceType: this.ServiceType,
    };
    console.log(repoprt);

    const credentials = JSON.stringify(repoprt);
    this.http
      .post(this.url, credentials, {
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
            console.log((<any>response).message);
            
            this.router.navigate(['/services/servicereports']);
          }
        },
        (err) => {
          this.error = true;
          this.isSubmit = false;
          this.message = err.message;
        }
      );
  }

  getAllServiceReqs(id:number) {
    this.isSubmit = true;
    this.http
      .get(`${this.booking}/${id}`, {
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
            this.SerReqId = (<any>response).data[0].Id;
            console.log(this.SerReqId);
            
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

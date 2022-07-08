import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {

  name= "Subham Roy"
  email = "subham@gmail.com"
  mobile = 451212
  constructor() { }

  ngOnInit(): void {
  }

}

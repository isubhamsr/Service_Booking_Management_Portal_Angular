import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  name = "Ac"
  make = "Hitachi"
  model = "Hitachi LQ57 32 (81.28cm)"
  cost = 45000
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService}  from  '../servicios/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {

  


  constructor(public _route : ActivatedRoute, public _data : DataService) { 

  }



}

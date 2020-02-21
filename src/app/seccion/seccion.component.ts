import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService}  from  '../servicios/data.service'

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent  {

  constructor(public _route : ActivatedRoute, public _data : DataService) { 
   

  }

  
}

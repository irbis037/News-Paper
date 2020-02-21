import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../servicios/data.service'

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent  {

idArticulo: string ="";

  constructor( public _route : ActivatedRoute, public _data : DataService) { 
     this.idArticulo = _route.snapshot.params["id"];

  }

 

}

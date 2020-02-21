import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  techNews: object={};
  
   noticias: object = {};


  constructor( public _http: HttpClient) { 

    let httpConfig: object = {

      "headers": new HttpHeaders({
        "content-type": "application/json"

      })

    }
    this.showTitulares(),httpConfig
    this.showApartado(), httpConfig
   
      

    }
    
  
showTitulares(){
  this._http.get("http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=86578233d7974ac7add39e656eec5e09")
  .subscribe( (responseAPI)=>{
    this.techNews = responseAPI["articles"]
})
}

showApartado(){
  this._http.get("https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?domains=wsj.com&apiKey=86578233d7974ac7add39e656eec5e09" )
  //este observable se resolvera cuando s
  .subscribe( (responseAPI)=>{
    this.noticias = responseAPI["articles"]
})


}
}
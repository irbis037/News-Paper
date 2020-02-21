import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { Error404Component } from './error404/error404.component';
import { DataService } from './servicios/data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SeccionComponent } from './seccion/seccion.component';


const RouterConfig: Routes = [
  {"path":"", "component": HomeComponent},
  {"path":"home", "component": HomeComponent},
  {"path":"articulo/:id", "component": ArticuloComponent},
  {"path":"**", "component":Error404Component}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticuloComponent,
    Error404Component,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    SeccionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig,{useHash: true}),
    HttpClientModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

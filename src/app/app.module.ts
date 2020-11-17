import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { DataTablesModule } from 'angular-datatables';
import { StarWarsService } from './service/service';
import { AppRoutingModule } from './app-routing.module';
import { PersonajeModule } from './components/personaje/personaje.module';
import { PersonajesModule } from './components/personajes/personajes.module';
import { ResidentesModule } from './components/residentes/residentes.module';
import { EmpleadosModule } from './components/empleados/empleados.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    // DataTablesModule,
    PersonajeModule,
    PersonajesModule,
    ResidentesModule,
    EmpleadosModule
  ],
  providers: [
    StarWarsService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
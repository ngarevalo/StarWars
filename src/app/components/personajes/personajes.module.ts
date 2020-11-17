
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonajesRoutingModule } from './personajes.routing.module';
import { PersonajesComponent } from './personajes.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PersonajesRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
})

export class PersonajesModule {}
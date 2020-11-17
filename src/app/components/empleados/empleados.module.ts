
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadosComponent } from './empleados.component';
import { EmpleadosRoutingModule } from './empleados.routing.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    EmpleadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmpleadosRoutingModule,
    DataTablesModule
  ]
})

export class EmpleadosModule {}
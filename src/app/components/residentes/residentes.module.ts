
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ResidentesComponent } from './residentes.component';
import { ResidentesRoutingModule } from './residentes.routing.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    ResidentesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ResidentesRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
})

export class ResidentesModule {}
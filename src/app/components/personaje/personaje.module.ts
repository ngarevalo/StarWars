
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonajeComponent } from './personaje.component';
import { PersonajeRoutingModule } from './personaje.routing.module';

@NgModule({
  declarations: [
    PersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PersonajeRoutingModule,
    ReactiveFormsModule,
  ]
})

export class PersonajeModule {}
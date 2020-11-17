
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResidentesComponent } from './residentes.component';

const routes: Routes = [
  {
    path: '',
    component: ResidentesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ResidentesRoutingModule {}
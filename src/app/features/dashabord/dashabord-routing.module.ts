import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashabordComponent } from './dashabord.component';

const routes: Routes = [
  {
    path: '',
    component: DashabordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashabordRoutingModule {}

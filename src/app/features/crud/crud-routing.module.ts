import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrudComponent } from './crud.component';

const routes = [
  {
    path: '', component: CrudComponent
  }
]
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CrudRoutingModule { }

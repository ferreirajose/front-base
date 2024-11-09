import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GerenciarPublicacaoComponent } from './gerenciar-publicacao.component';

const routes = [
  { path: '', component: GerenciarPublicacaoComponent }
]
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GerenciarPublicacaoRoutingModule { }

import { NgModule } from '@angular/core';
import { GerenciarPublicacaoComponent } from './gerenciar-publicacao.component';
import { SharedModule } from '@shared/shared.module';
import { GerenciarPublicacaoRoutingModule } from './gerenciar-publicacao-routing.module';
import { PrimengModule } from '@shared/primeng.module';


@NgModule({
  imports: [
    SharedModule,
    PrimengModule,
    GerenciarPublicacaoRoutingModule
  ],
  declarations: [GerenciarPublicacaoComponent]
})
export class GerenciarPublicacaoModule { }

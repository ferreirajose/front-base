import { NgModule } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { GerenciarPublicacaoComponent } from './gerenciar-publicacao.component';
import { SharedModule } from '@shared/shared.module';
import { GerenciarPublicacaoRoutingModule } from './gerenciar-publicacao-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';


import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  imports: [
    SharedModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    TableModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule,
    AutoCompleteModule,
    GerenciarPublicacaoRoutingModule
  ],
  declarations: [GerenciarPublicacaoComponent]
})
export class GerenciarPublicacaoModule { }

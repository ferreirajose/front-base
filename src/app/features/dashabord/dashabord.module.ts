import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashabordComponent } from './dashabord.component';
import { DashabordRoutingModule } from './dashabord-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashabordRoutingModule
  ],
  declarations: [DashabordComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashabordModule { }

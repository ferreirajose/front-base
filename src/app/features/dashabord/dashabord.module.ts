import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DashabordComponent } from './dashabord.component';
import { DashabordRoutingModule } from './dashabord-routing.module';
import { SharedModule } from '@shared/shared.module';
import { PrimengModule } from '@shared/primeng.module';

@NgModule({
  imports: [
    SharedModule,
    PrimengModule,
    DashabordRoutingModule
  ],
  declarations: [DashabordComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashabordModule { }

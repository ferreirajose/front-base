import { NgModule } from '@angular/core';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { SharedModule } from '@shared/shared.module';
import { PrimengModule } from '@shared/primeng.module';

@NgModule({
    imports: [
      SharedModule,
      CrudRoutingModule,
      PrimengModule,
    ],
    declarations: [CrudComponent]
})
export class CrudModule { }

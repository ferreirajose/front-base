import { NgModule } from '@angular/core';
import { AppConfigComponent } from './app.config.component';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '@shared/primeng.module';

@NgModule({
    imports: [
        SharedModule,
        PrimengModule,
    ],
    declarations: [
        AppConfigComponent
    ],
    exports: [
        AppConfigComponent
    ]
})
export class AppConfigModule { }

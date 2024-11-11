import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppConfigModule } from './config/config.module';
import { AppSidebarComponent } from "./app.sidebar.component";
import { AppLayoutComponent } from "./app.layout.component";
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '@shared/primeng.module';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,
        AccessibilityComponent,
        NotificationComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        PrimengModule,
        AppConfigModule
    ],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule { }

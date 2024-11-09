import { FullCalendarModule } from '@fullcalendar/angular';
import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar.component';
import { SharedModule } from '@shared/shared.module';
import { CalendarRoutingModule } from './calendar-routing.module';

@NgModule({
  imports: [
    SharedModule,
    FullCalendarModule,
    CalendarRoutingModule
  ],
  declarations: [CalendarComponent]
})
export class CalendarModule { }

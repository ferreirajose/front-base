import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [provideHttpClient()],
})
export class SharedModule {}

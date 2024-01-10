import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { CoursesComponent } from './courses/courses.component';
import { BooksComponent } from './books/books.component';
import { PascalCasePipe } from '../Pipe/pascal-case.pipe';

console.warn('DashboardModule loaded')
@NgModule({
  declarations: [DashboardComponent, CoursesComponent, BooksComponent, PascalCasePipe],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }

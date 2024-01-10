import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { NgModule } from "@angular/core";
import { BooksComponent } from "./books/books.component";
import { CoursesComponent } from "./courses/courses.component";
import { AuthGuard } from "../Guard/auth.guard";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'books', component: BooksComponent, canActivate: [AuthGuard] },
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }

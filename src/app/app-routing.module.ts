import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';

const routes: Routes = [
  { path: 'simpletypes', component:ChildComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component:DetailComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

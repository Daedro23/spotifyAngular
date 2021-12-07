import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [  
  { path: 'inicio', component: HomeComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'details/:id/:id', component: DetailsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

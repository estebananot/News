import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlinesComponent } from './components/topheadlines/topheadlines.component';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch: 'full'},
  {path : 'home', component: TopheadlinesComponent},
  {path : 'tech', component: TopheadlinesComponent, data : {category: 'technology'}},
  {path : 'sports', component: TopheadlinesComponent, data : {category: 'sports'}},
  {path : 'business', component: TopheadlinesComponent, data : {category: 'business'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

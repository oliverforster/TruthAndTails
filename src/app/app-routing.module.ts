import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {title: "home", path: 'home', component: AppComponent },
  {title: "other", path: 'other', component: OtherComponent},
  {path: "**", redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

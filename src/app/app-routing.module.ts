import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: AppComponent, canActivate:[AuthGuard]},
  { path: 'profile', component: ProfileComponent }
  
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

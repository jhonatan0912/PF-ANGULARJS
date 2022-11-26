import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'users', component: UsersComponent },
  // { path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ], exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

let routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'films', loadChildren: () => import('./modules').then(value => value.FilmModule)},
      {path: 'home', loadChildren: () => import('./modules').then(value => value.HomeModule)},
      // {path: 'comments', loadChildren: () => import('./modules').then(value => value.CommentModule)},
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

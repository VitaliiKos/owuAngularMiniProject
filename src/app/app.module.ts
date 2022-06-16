import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MainInterceptor} from "./main.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: MainInterceptor
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

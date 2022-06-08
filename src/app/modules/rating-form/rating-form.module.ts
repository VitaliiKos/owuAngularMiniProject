// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// // import { RatingFormComponent } from './components/rating-form/rating-form.component';
// import {BrowserModule} from "@angular/platform-browser";
// import {ReactiveFormsModule} from "@angular/forms";
// import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
//
//
//
// @NgModule({
//   declarations: [
//     RatingFormComponent,
//     // NgbdRatingForm
//   ],
//   imports: [BrowserModule, ReactiveFormsModule, NgbModule],
// })
// export class RatingFormModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdRatingForm } from './components/rating-form/rating-form.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgbModule,
    CommonModule
  ],
  declarations: [NgbdRatingForm],
  exports: [NgbdRatingForm],
  bootstrap: [NgbdRatingForm]
})
export class NgbdRatingFormModule {}

//
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//
// import { NgbdRatingBasic } from './components/rating-form/rating-form.component';
//
// @NgModule({
//   imports: [NgbModule],
//   declarations: [NgbdRatingBasic],
//   exports: [NgbdRatingBasic],
//   bootstrap: [NgbdRatingBasic]
// })
// export class NgbdRatingBasicModule {}

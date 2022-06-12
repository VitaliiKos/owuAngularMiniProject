import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from "@angular/common";

import {NgbdRatingForm} from './components/rating-form/rating-form.component';

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
export class NgbdRatingFormModule {
}

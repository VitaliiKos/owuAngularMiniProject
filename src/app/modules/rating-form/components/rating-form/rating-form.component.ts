
import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']
})
export class NgbdRatingForm {
  ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
}
//
// import {Component} from '@angular/core';
//
// @Component({
//   selector: 'app-rating-form',
//   templateUrl: './rating-form.component.html',
//   styleUrls: ['./rating-form.component.css']
// })
// export class NgbdRatingBasic {
//   currentRate = 8;
// }

import { Component, OnInit, Input } from '@angular/core';
import { Errors } from '../models';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.scss']
})
export class ListErrorsComponent {

  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = [];

    if (errorList.errors) {
      for (let field in errorList.errors) {
        this.formattedErrors.push(`${field} ${errorList.errors[field]}`);
      }
    }
  };

  get errorList() { return this.formattedErrors; }

}

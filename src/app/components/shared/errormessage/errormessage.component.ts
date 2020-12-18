import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errormessage',
  templateUrl: './errormessage.component.html',
  styles: [
  ]
})
export class ErrormessageComponent {

  @Input() errorObj: any = {};

  constructor() { }
}

import {Component} from '@angular/core';
import {JsonFormsAngularService, JsonFormsControl} from '@jsonforms/angular';

@Component({
  selector: 'app-readonly-component',
  template: `
    <mat-checkbox (change)="toggleReadOnly($event.checked)">Read Only</mat-checkbox>
  `
})
export class ReadOnlyComponent extends JsonFormsControl {

  constructor(service: JsonFormsAngularService) {
    super(service);
  }

  toggleReadOnly(checked: boolean) {
    console.log(checked);
    this.jsonFormsService.setReadonly(checked);
  }
}

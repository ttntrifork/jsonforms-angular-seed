import {Component} from '@angular/core';
import {JsonFormsAngularService, JsonFormsControl} from '@jsonforms/angular';
import {Actions, getLocale} from '@jsonforms/core';

@Component({
  selector: 'app-import-component',
  template: `
    <p>Click button to import</p>
    <button mat-raised-button color="primary" (click)="importData()">Import data</button>
  `
})
export class ImportComponent extends JsonFormsControl {

  constructor(service: JsonFormsAngularService) {
    super(service);
  }

  importData() {
    this.jsonFormsService.updateCore(Actions.update('orders', data => ([
        {
          customer: {
            id: '1',
            name: 'Bug bytes',
            department: 'Complaints Division',
            phone: '(12) 34 56 78 90'
          },
          title: '1 PITA',
          ordered: true,
          processId: 1890004498,
          assignee: 'To whom it may concern',
          status: 'ordered',
          startDate: '2020-12-14',
          endDate: '2020-12-15',
        }
      ]
    )));
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input('class') classNames = ''
   @Input() headers = [{ key: "", label: "" }]

   @Input() data: { [key: string]: string | number | boolean }[] = [];
}

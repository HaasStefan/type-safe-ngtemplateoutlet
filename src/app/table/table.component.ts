import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { TableHeadDirective } from '../directives/table-head.directive';
import { TableRowDirective } from '../directives/table-row.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent< T extends object> {
  @Input() data!: T[];
  @ContentChild(TableHeadDirective, {read: TemplateRef}) tableHead!: TemplateRef<any>;
  @ContentChild(TableRowDirective, {read: TemplateRef}) tableRow!: TemplateRef<any>;
}

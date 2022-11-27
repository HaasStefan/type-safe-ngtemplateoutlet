import { Directive, Input } from '@angular/core';

interface Row<T extends object> {
  $implicit: T
}

@Directive({
  selector: 'ng-template[appTableRow]'
})
export class TableRowDirective<T extends object> {
  @Input() appTableRow!: T[] | '';

  constructor() { }

  static ngTemplateContextGuard<TContext extends object>(
    directive: TableRowDirective<TContext>,
    context: unknown
  ): context is Row<TContext> {
    return true;
  }

}

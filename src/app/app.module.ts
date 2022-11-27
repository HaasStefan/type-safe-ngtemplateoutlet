import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableHeadDirective } from './directives/table-head.directive';
import { TableRowDirective } from './directives/table-row.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableHeadDirective,
    TableRowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

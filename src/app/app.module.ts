import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';


import { AppComponent } from './app.component';

import { DataService } from './data.service';
import { ClientBaseComponent } from './client-base/app-client-base.component';
import { FormComponent } from './form/app-form.component';
import { TableComponent } from './table/app-table.component';
import { HeaderComponent } from './header/app-header.component';
import { FooterComponent } from './footer/app-footer.component';
import { SearchComponent } from './search/app-search.component';
import { FormCreateComponent } from './form-create/app-form-create.component';
import { FormUpdateComponent } from './form-update/app-form-update.component';
import { TableDataBaseComponent } from './table-data-base/app-table-data-base.component';
import { TableSearchComponent } from './table-search/app-table-search.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientBaseComponent,
    FormComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    FormCreateComponent,
    FormUpdateComponent,
    TableDataBaseComponent,
    TableSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

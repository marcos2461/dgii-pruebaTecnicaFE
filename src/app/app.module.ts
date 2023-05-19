import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContribuyenteComponent } from './feactures/contribuyente/contribuyente/contribuyente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout/admin-layout.component';
import { ComprobantesFiscalesComponent } from './feactures/comprobantes-fiscales/comprobantes-fiscales.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponentComponent } from './component/modal-component/modal-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ContribuyenteComponent,
    AdminLayoutComponent,
    ComprobantesFiscalesComponent,
    ModalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

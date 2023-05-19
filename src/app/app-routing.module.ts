import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContribuyenteComponent } from './feactures/contribuyente/contribuyente/contribuyente.component';
import { ComprobantesFiscalesComponent } from './feactures/comprobantes-fiscales/comprobantes-fiscales.component';

const routes: Routes = [
  {
    path:'contribuyente',
    component: ContribuyenteComponent
  },
  {
    path:'comprobanteFiscal',
    component:ComprobantesFiscalesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

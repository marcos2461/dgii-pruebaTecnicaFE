import { Component } from '@angular/core';
import { Comprobantefiscal } from 'src/app/model/comprobantefiscal';
import { ComprobanteFiscalService } from 'src/app/services/comprobanteFiscal/comprobante-fiscal.service';

@Component({
  selector: 'app-comprobantes-fiscales',
  templateUrl: './comprobantes-fiscales.component.html',
  styleUrls: ['./comprobantes-fiscales.component.css']
})
export class ComprobantesFiscalesComponent {

  Comprobantesfiscales! : Comprobantefiscal[];
  numeroIdentificacion: string="";


  constructor(private _comprobanteFiscalService: ComprobanteFiscalService){

  }



  getComprobanteFiscalByContribuyente(){
    this._comprobanteFiscalService.getComprobanteFiscalByContribuyenteId(this.numeroIdentificacion).subscribe(
      result=>{
        this.Comprobantesfiscales = result;
   
      },

    );
  }

}

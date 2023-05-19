import { Component, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { Comprobantefiscal } from 'src/app/model/comprobantefiscal';
import { ComprobanteFiscalService } from 'src/app/services/comprobanteFiscal/comprobante-fiscal.service';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent {
  numeroIdentificacion: any;
  Comprobantesfiscales! : Comprobantefiscal[];
  montoTotal: number= 0 ;
  itbisTotal: number =0 ;

  constructor(public dialogRef: MatDialogRef<ModalComponentComponent>,private _comprobanteFiscalService: ComprobanteFiscalService,  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.numeroIdentificacion= data;
    this.getComprobanteFiscalByContribuyente();
  }

  Cerrar(): void {

    this.dialogRef.close();
  }

  getComprobanteFiscalByContribuyente(){
    this._comprobanteFiscalService.getComprobanteFiscalByContribuyenteId(this.numeroIdentificacion).subscribe(
      result=>{
        this.Comprobantesfiscales = result;
        this.getTotales();
      },

    );
  }

  getTotales(){
    for (let i = 0; i < this.Comprobantesfiscales.length; i++) {
      this.montoTotal += this.Comprobantesfiscales[i].monto;
      this.itbisTotal += this.Comprobantesfiscales[i].itbis18;
    }
  }
}

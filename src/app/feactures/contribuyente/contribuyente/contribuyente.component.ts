import { Component } from '@angular/core';
import { Contribuyente } from 'src/app/model/contribuyente';
import { ContribuyenteService } from 'src/app/services/contribuyente/contribuyente.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponentComponent } from 'src/app/component/modal-component/modal-component.component';

@Component({
  selector: 'app-contribuyente',
  templateUrl: './contribuyente.component.html',
  styleUrls: ['./contribuyente.component.css']
})
export class ContribuyenteComponent {

  contribuyentes!: Contribuyente[];

  constructor(private _contribuyenteService: ContribuyenteService, public dialog: MatDialog){

  }

  ngOnInit() {
    this.getAllContribuyentes();
    console.log(this.contribuyentes);
  }

getAllContribuyentes(){
  this._contribuyenteService.getAllContribuyentes().subscribe(result =>{
      this.contribuyentes= result;
      console.log(result)

  });
}

seleccionarFila(item: any): void {
  const dialogRef = this.dialog.open(ModalComponentComponent, {
    width: '70%',
    data: item
  });
}


abrirModal(): void {

}
}

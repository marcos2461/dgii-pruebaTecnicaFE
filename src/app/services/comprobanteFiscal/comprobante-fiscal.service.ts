import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from 'src/app/model/base-response';
import { Comprobantefiscal } from 'src/app/model/comprobantefiscal';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ComprobanteFiscalService {

  constructor(private _http: HttpClient) { }
  public getComprobanteFiscalByContribuyenteId ( numeroIdentificacion : string){
    return this._http.get<Comprobantefiscal[]>(`${environment.apiUrl}/ComprobanteFiscal?identificacionNumber=${numeroIdentificacion}`);
  }

}

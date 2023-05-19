import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Contribuyente } from 'src/app/model/contribuyente';
import { BaseResponse } from 'src/app/model/base-response';

@Injectable({
  providedIn: 'root'
})
export class ContribuyenteService {

  constructor(private _http: HttpClient) { }

  public getAllContribuyentes (){
    return this._http.get<Contribuyente[]>(`${environment.apiUrl}/contribuyente`);
  }

}

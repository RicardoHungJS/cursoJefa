import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url = 'http://scratchya.com.ar/vue/datos.php';

  constructor(private _http: HttpClient) {}

  retornar(){
    return this._http.get(this.url);
  }
}

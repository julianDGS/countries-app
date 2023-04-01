import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'https://restcountries.com/v3.1/';
  private fields = ['name','capital','flags','population', 'cca2'];
  

  constructor(private http: HttpClient) { }

  buscarPais(termino: string, categoria: string): Observable<Country[]>{
    const url = `${this.apiUrl}/${categoria}/${termino}`
    const params = new HttpParams()
      .set('fields', this.fields.join(','));
    return this.http.get<Country[]>( url, {params} );
  }

  getPaisPorCca2(id: string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>( url );
  }

}

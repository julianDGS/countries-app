import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'https://restcountries.com/v3.1/';
  private fields = ['name','capital','flags','population', 'cca2'];
  public cacheStorage: CacheStore = {
    porPais: {term: '', paises: []}, 
    porCapital: {term: '', paises: []}, 
    porRegion: { paises: []} 
  }
  
  constructor(private http: HttpClient) { 
    this.getStorage();
  }

  buscarPais(termino: string, categoria: string): Observable<Country[]>{
    const url = `${this.apiUrl}/${categoria}/${termino}`
    const params = new HttpParams().set('fields', this.fields.join(','));

    return this.http.get<Country[]>( url, {params} )
      .pipe(
        catchError( error => {
          console.log(error)
          return of([]) 
        }),
        delay( 500 ),
        tap( paises => {
          this.cacheStore(categoria, paises, termino)
        })
      );
  }

  getPaisPorCca2(id: string): Observable<Country | null>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>( url )
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

  private cacheStore(categoria: string, paises: Country[], term: string){
    switch(categoria){
      case 'name':
        this.cacheStorage.porPais = {term, paises}
        break
      case 'capital':
        this.cacheStorage.porCapital = {term, paises}
        break
      case 'region':
        this.cacheStorage.porRegion = {region: term as Region, paises}
        break
      }
      this.setStorage();
  }

  private setStorage(){
    localStorage.setItem('cacheStorage', JSON.stringify(this.cacheStorage));
  }

  private getStorage(){
    if(!localStorage.getItem('cacheStorage')) return;
    this.cacheStorage = JSON.parse(localStorage.getItem('cacheStorage')!);
  }

}

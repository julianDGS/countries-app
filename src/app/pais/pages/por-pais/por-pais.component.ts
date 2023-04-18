import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `]
})
export class PorPaisComponent implements OnInit{

  // mostrarSugerencias: boolean = false;
  // countriesSug: Country[]=[];
  public termino: string = '';
  public countries: Country[]=[];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private paisService: PaisService){}
  
  ngOnInit(): void {
    this.countries = this.paisService.cacheStorage.porPais.paises;
    this.initialValue = this.paisService.cacheStorage.porPais.term;
  }

  buscar(termino: string){
    // this.mostrarSugerencias = false;
    this.isLoading = true;
    this.termino = termino;
    this.paisService.buscarPais(termino, 'name').subscribe(
      {
        next: (countries) => {
          this.countries = countries;
          this.isLoading = false;
        }
      }
    );
  }

  // sugerencias(partialTermino: any){
  //   this.mostrarSugerencias = true;
  //   this.termino = partialTermino
  //   this.paisService.buscarPais(partialTermino, 'name').subscribe(
  //     {
  //       next: (resp) => this.countriesSug = resp.splice(0, 5),
  //     }
  //   );
  // }

}

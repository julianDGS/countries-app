import { Component } from '@angular/core';
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
export class PorPaisComponent {

  termino: string = '';
  isError: boolean = false;
  countries: Country[]=[];
  countriesSug: Country[]=[];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService){};

  buscar(termino: string){
    this.isError = false;
    this.mostrarSugerencias = false;
    this.termino = termino;
    this.paisService.buscarPais(termino, 'name').subscribe(
      {
        next: (resp) => this.countries = resp,
        error: () => {this.countries = []; this.isError = true}
      }
    );
  }

  sugerencias(partialTermino: any){
    this.isError = false;
    this.mostrarSugerencias = true;
    this.termino = partialTermino
    this.paisService.buscarPais(partialTermino, 'name').subscribe(
      {
        next: (resp) => this.countriesSug = resp.splice(0, 5),
        error: () => {this.countriesSug = []; this.isError = true}
      }
    );
  }

}

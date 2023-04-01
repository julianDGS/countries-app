import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  
  termino: string = '';
  isError: boolean = false;
  countries: Country[]=[];

  constructor(private paisService: PaisService){};

  buscar(termino: string){
    this.isError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino, 'capital').subscribe(
      {
        next: (resp) => this.countries = resp,
        error: () => {this.countries = []; this.isError = true}
      }
    );
  }

  sugerencias(partialTermino: any){
    this.isError = false;
    // TODO: crear sugerencias
  }
}

import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {

  regiones: string[] = ['africa','americas','asia','europe','oceania'];
  regionActiva: string = '';
  countries: Country[]=[];

  constructor(private paisService: PaisService){};

  getClassCSS(region: string): string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string){
    if (this.regionActiva !== region){
      this.regionActiva = region;
      this.buscar(region);
    }
  }

  buscar(termino: string){
    this.paisService.buscarPais(termino, 'region').subscribe(
      {
        next: (resp) => this.countries = resp,
        error: () => {this.countries = [];}
      }
    );
  }
}

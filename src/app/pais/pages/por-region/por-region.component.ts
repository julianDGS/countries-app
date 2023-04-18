import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {

  public regiones: Region[] = ['africa','americas','asia','europe','oceania'];
  public regionActiva?: Region;
  public countries: Country[]=[];
  public isLoading = false;

  constructor(private paisService: PaisService){};

  ngOnInit(): void {
    this.countries = this.paisService.cacheStorage.porRegion.paises;
    this.regionActiva = this.paisService.cacheStorage.porRegion.region;
  }

  getClassCSS(region: string): string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: Region){
    if (this.regionActiva !== region){
      this.regionActiva = region;
      this.buscar(region);
    }
  }

  buscar(termino: string){
    this.isLoading = true;
    this.paisService.buscarPais(termino, 'region').subscribe(
      {
        next: (resp) => {
          this.countries = resp;
          this.isLoading = false;
      }
      }
    );
  }
}

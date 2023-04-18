import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {
  
  public termino: string = '';
  public countries: Country[]=[];
  public isLoading = false;
  public initialValue: string = '';

  constructor(private paisService: PaisService){};

  ngOnInit(): void {
    this.countries = this.paisService.cacheStorage.porCapital.paises;
    this.initialValue = this.paisService.cacheStorage.porCapital.term;
  }

  buscar(termino: string){
    this.termino = termino;
    this.isLoading = true;
    this.paisService.buscarPais(termino, 'capital').subscribe(
      {
        next: (resp) => {
          this.countries = resp;
          this.isLoading = false;
      }
      }
    );
  }
}

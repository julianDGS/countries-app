import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService){
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.paisService.getPaisPorCca2(id) ),
        tap(console.log)
      )
      .subscribe(paisArr => {
        this.pais = paisArr[0]
      });

      /*Este codigo hace lo mismo que el de arriba */
    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     this.paisService.getPaisPorCca2(id)
    //       .subscribe(
    //         paisResponse => this.pais = paisResponse || {}
    //       );
    //   })
  }

}

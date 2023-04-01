import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html'
})
export class TablaComponent {

    @Input() countries: Country[]=[];

}

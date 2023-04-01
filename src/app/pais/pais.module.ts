import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TablaComponent } from './components/tabla/tabla.component';
import { InputComponent } from './components/input/input.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    TablaComponent,
    InputComponent
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class PaisModule { }

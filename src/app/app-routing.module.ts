import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AboutPageComponent } from "./shared/pages/about-page/about-page.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'about',
        component: AboutPageComponent,
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: 'paises',
        loadChildren: () => import('./pais/pais.module').then( m => m.PaisModule)
    },
    {
        path: '**',
        redirectTo: 'paises'
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
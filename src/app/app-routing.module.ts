import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleComponent } from './google/google.component';
import { RutasComponent } from './rutas/rutas.component';
import { RegistroComponent } from './registro/registro.component';
import { OpenStrepMapsComponent } from './open-strep-maps/open-strep-maps.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent},
  { path: 'google' , component:GoogleComponent },
  { path: 'rutas', component: RutasComponent},
  { path: 'open-strep-maps', component: OpenStrepMapsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
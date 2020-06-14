import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { GoogleComponent } from './google/google.component';
import { RutasComponent } from './rutas/rutas.component';
import { RegistroComponent } from './registro/registro.component';

import{ AppRoutingModule} from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import { OpenStrepMapsComponent } from './open-strep-maps/open-strep-maps.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';




@NgModule({
  declarations: [
    AppComponent,    
    GoogleComponent,
    RutasComponent,
    RegistroComponent,
    OpenStrepMapsComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule, MatRippleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

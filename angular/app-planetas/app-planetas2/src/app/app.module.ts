import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPlanetasComponent } from './components/lista-planetas/lista-planetas.component';
import { DetallePlanetaComponent } from './components/detalle-planeta/detalle-planeta.component';
import { OrbitaTerrestrePipe } from './pipe/orbitaTerrestre/orbita-terrestre.pipe';
import { RotacionTerrestrePipe } from './pipe/rotacionTerrestre/rotacion-terrestre.pipe';
import { ClimaDirective } from './directives/clima/clima.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListaPlanetasComponent,
    DetallePlanetaComponent,
    OrbitaTerrestrePipe,
    RotacionTerrestrePipe,
    ClimaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

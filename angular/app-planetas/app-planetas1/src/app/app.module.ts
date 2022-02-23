import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPlanetasComponent } from './components/lista-planetas/lista-planetas.component';
import { DetallePlanetaComponent } from './components/detalle-planeta/detalle-planeta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPlanetasComponent,
    DetallePlanetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

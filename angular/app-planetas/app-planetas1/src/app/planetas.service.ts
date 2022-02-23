import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Planeta } from './model/Planeta';
import { PLANETAS } from './model/planetas-mock';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {
  planetaSeleccionado: Planeta = new Planeta();
  planetas: Planeta[] = PLANETAS;

  constructor() { }

  getPlanetas(): Observable<Planeta[]>{
    return of(this.planetas);
  }

  getPlaneta(): Observable<Planeta>{
    return of(this.planetaSeleccionado);
  }

  setPlaneta(planeta: Planeta): void{
    this.planetaSeleccionado = planeta;
  }

}

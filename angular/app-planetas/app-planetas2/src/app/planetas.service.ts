import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiPlaneta } from './model/api-planeta';
import { Planeta } from './model/Planeta';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {
  planetas: Planeta[] = [];

  constructor(private http: HttpClient) { 
    this.obtenerDatos();
  }

  /**
   * Funcion basica que se encarga de obtener 
   * los planetas de un api y crear la lista
   */
  obtenerDatos(){
    this.http.get<ApiPlaneta>('https://swapi.dev/api/planets')
    .subscribe(results => {
      let lista = results.results;
      let id = 1;
      lista.forEach(element => {
        let name = element.name;
        let rotation_period = element.rotation_period;
        let orbital_period = element.orbital_period;
        let climate = element.climate;
        let gravity = element.gravity;
        let terrain = element.terrain;
        let planeta = new Planeta(id, name, rotation_period, orbital_period, climate, gravity, terrain);
        this.planetas.push(planeta);
        id++;
      });
    });
  }

  /**
   * Funcion que devuevle la lista de planetas
   * @returns 
   */
  getPlanetas(): Observable<Planeta[]>{
    return of(this.planetas);
  }

  /**
   * Funcion que busca un planeta en la lista y lo devuelve
   * @param id del planeta a buscar
   * @returns el pnaeta encontrado o un planeta vacio en caso contrario
   */
  getPlaneta(id: number): Observable<Planeta>{
    let planeta = new Planeta();
    this.planetas.forEach(element => {
      if (element.id == id) {
        planeta = element;
      }
    });

    return of(planeta);
  }


}

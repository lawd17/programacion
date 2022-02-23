import { Component, OnInit } from '@angular/core';
import { Planeta } from 'src/app/model/Planeta';
import { PlanetaService } from 'src/app/planetas.service';

@Component({
  selector: 'app-lista-planetas',
  templateUrl: './lista-planetas.component.html',
  styleUrls: ['./lista-planetas.component.css']
})
export class ListaPlanetasComponent implements OnInit {
  planetas: Planeta[] = [];
  planetaSeleccionado: Planeta = new Planeta();

  constructor( private planetaService: PlanetaService) { }

  ngOnInit(): void {
    this.getPlanetas();
    
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.getPlaneta();
  }

  getPlanetas(){
    this.planetaService.getPlanetas()
    .subscribe(
      planetas => this.planetas = planetas
    );
  }

  getPlaneta():void {
    this.planetaService.getPlaneta()
    .subscribe(
      planetaSeleccionado => this.planetaSeleccionado = planetaSeleccionado 
    );
  }

  setPlaneta(planeta: Planeta): void{
    this.planetaService.setPlaneta(planeta);
  }

}

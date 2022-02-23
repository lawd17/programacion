import { Component, OnInit } from '@angular/core';
import { Planeta } from 'src/app/model/Planeta';
import { PlanetaService } from 'src/app/planetas.service';

@Component({
  selector: 'app-detalle-planeta',
  templateUrl: './detalle-planeta.component.html',
  styleUrls: ['./detalle-planeta.component.css']
})
export class DetallePlanetaComponent implements OnInit {
  planetaSeleccionado: Planeta = new Planeta();

  constructor(private planetaService: PlanetaService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.getPlaneta();
  }

  getPlaneta():void {
    this.planetaService.getPlaneta()
    .subscribe(
      planetaSeleccionado => this.planetaSeleccionado = planetaSeleccionado 
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planeta } from 'src/app/model/Planeta';
import { PlanetaService } from 'src/app/planetas.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-planeta',
  templateUrl: './detalle-planeta.component.html',
  styleUrls: ['./detalle-planeta.component.css']
})
export class DetallePlanetaComponent implements OnInit {
  planetaSeleccionado: Planeta = new Planeta();

  constructor(
    private planetaService: PlanetaService, 
    private route: ActivatedRoute, 
    private location: Location) { 

  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.getPlaneta();
  }

  getPlaneta(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.planetaService.getPlaneta(id)
    .subscribe(
      planeta => this.planetaSeleccionado = planeta
    );
  }

  goBack(): void {
    this.location.back();
  }

}

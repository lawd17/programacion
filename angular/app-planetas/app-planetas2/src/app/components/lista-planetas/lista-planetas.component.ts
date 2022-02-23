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

  constructor( private planetaService: PlanetaService) {
  }

  ngOnInit(): void {
    this.getPlanetas(); 
  }

  getPlanetas(): void{
    this.planetaService.getPlanetas()
    .subscribe(
      planetas => this.planetas = planetas
    )
  }



}

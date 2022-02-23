import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rotacionTerrestre'
})
export class RotacionTerrestrePipe implements PipeTransform {

  transform(rotacion: string): string {
    let rotacionPlaneta = parseFloat(rotacion);
    let respuesta = "" + rotacionPlaneta;
    if (rotacionPlaneta > 24) {
      let proporcion = rotacionPlaneta / 24;
      respuesta += " (" + proporcion.toFixed(2) + " días terrestres)"
    }

    return respuesta;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orbitaTerrestre'
})
export class OrbitaTerrestrePipe implements PipeTransform {

  transform(orbita: string): string {
    let orbitaPlaneta = parseFloat(orbita);
    let respuesta = "" + orbitaPlaneta;
    let proporcion = orbitaPlaneta / 365;
    respuesta += " (" + proporcion.toFixed(2) + " años terrestres)"


    return respuesta;
  }

}

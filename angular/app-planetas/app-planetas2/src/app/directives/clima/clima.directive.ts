import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClima]'
})

export class ClimaDirective implements OnInit{
  @Input() clima: string = "";

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
   
  }

  ngOnInit(): void {
    let color = this.colorClima();
    const element = this.elementRef.nativeElement;
    this.renderer2.setStyle(element, 'background', color);

  }

  
  /**
   * Funcion que comprueba el nombre del clima y devuelve un color
   * @param value clima del planeta
   * @returns color
   */
  colorClima() {
    let color = "white";

    switch (this.clima) {
      case "arid":
        color = "rgb(143, 102, 40)";
        break;

      case "temperate":
        color = "rgb(186, 210, 231)";
        break;

      case "frozen":
        color = "rgb(154, 208, 255)";
        break;

      case "murky":
        color = "rgb(87, 107, 83)";
        break;

      case "desert":
        color = "rgb(201, 174, 135)";
        break;

      case "tropical":
        color = "rgb(109, 192, 76)";
        break;

      default:
        color = "white";
        break;
    }

    return color;

  }

}

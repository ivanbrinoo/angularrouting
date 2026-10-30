import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent {
  arraynumeros: number [];
  @ViewChild("cajanumero") cajanumero!: ElementRef;
numero: any;

tablaMultiplicar(): void {
  this.numero = parseInt(this.cajanumero.nativeElement.value);
  for(let i = 1; i <= 10; i++)
    this.arraynumeros.push(i);

}


  constructor(){
    this.arraynumeros = []
}
}

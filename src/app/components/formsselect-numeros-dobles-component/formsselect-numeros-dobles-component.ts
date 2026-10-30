import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formsselect-numeros-dobles-component',
  standalone: false,
  styleUrl: './formsselect-numeros-dobles-component.css',
  templateUrl: './formsselect-numeros-dobles-component.html',
})
export class FormsselectNumerosDoblesComponent {
  @ViewChild("cajanumero") cajanumero!: ElementRef;
  doble: number;
  arraynumeros: number[];

generarNumero(): void {
  //generar numero random
  let numero = Math.floor(Math.random() * 100) + 1;
  this.arraynumeros.push(numero)
  console.log(numero)
}

numeroDoble(): void {
  let numero = parseInt(this.cajanumero.nativeElement.value);
  this.doble = numero * 2;
}

constructor(){
    this.doble = 0;
    this.arraynumeros = [];
  }
}

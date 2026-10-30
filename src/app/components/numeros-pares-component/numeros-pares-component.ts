import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-numeros-pares-component',
  standalone: false,
  styleUrl: './numeros-pares-component.css',
  templateUrl: './numeros-pares-component.html',
})
export class NumerosParesComponent {
  arraynumeros: number[];
  @ViewChild("cajanumero1") cajanumero1!: ElementRef;
  @ViewChild("cajanumero2") cajanumero2!: ElementRef;

  mostrarPares(): void {
    let inicio = parseInt(this.cajanumero1.nativeElement.value);
    let fin = parseInt(this.cajanumero2.nativeElement.value);
    for(let i = inicio; i <= fin; i++ ){
      if(i % 2 == 0){
        this.arraynumeros.push(i);       
    }
  }
}

  constructor(){
    this.arraynumeros = [];
  }
}


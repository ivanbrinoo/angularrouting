import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  styleUrl: './numero-doble-component.css',
  templateUrl: './numero-doble-component.html',
})
export class NumeroDobleComponent implements OnInit {
  doble: number = 0;
  mensaje!: string;

  constructor(
    private _active: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._active.params.subscribe((parametros: Params) => {
      if(parametros["numero"]){
        let numero = parametros["numero"];
        this.doble = numero * 2;
      }else{
        this.mensaje = "No has puesto ningun parametro";
      }
      
    })
  }
}
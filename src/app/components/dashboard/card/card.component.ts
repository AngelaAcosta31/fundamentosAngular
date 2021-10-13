import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() usuarios: any;
  nombre: string;
  email: string;
  genero: string;
  
  constructor() { 
    this.usuarios ="";
    this.nombre ="";
    this.email ="";
    this.genero ="";
  }


  ngOnInit(): void {

    this.nombre = this.usuarios.nombre;
    this.email = this.usuarios.email;
    this.genero = this.usuarios.genero;
  }



}

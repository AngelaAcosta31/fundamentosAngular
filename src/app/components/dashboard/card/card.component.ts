import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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
  id: number;
  
  constructor(private router: Router) { 
    this.usuarios ="";
    this.nombre ="";
    this.email ="";
    this.genero ="";
    this.id = 0
  }


  ngOnInit(): void {

    this.nombre = this.usuarios.name;
    this.email = this.usuarios.email;
    this.genero = this.usuarios.gender;
    this.id = this.usuarios.id;
  }

  verDetalles(): void {
    this.router.navigate(['dashboard/usuario'], {queryParams: {id:this.id}});
  }



}

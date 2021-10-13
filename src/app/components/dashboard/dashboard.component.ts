import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listaUsuarios: any[];
  texto: string;
  constructor() { 
    this.listaUsuarios = [
      {nombre: "Santiago Lopez", email: "santiago@gmail.com", genero: "Masculino"},
      {nombre: "Daniela Hurtado", email: "daniela@gmail.com", genero: "Femenino"},
      {nombre: "Camila Gomez", email: "camila@gmail.com", genero: "Femenino"},
      {nombre: "Andres Gonzales", email: "andres@gmail.com",  genero: "Masculino"},
      {nombre: "Miguel Ortiz", email: "miguel@gmail.com", genero: "Masculino"},
      {nombre: "Alejandro Arango", email: "alejandro@gmail.com", genero: "Masculino"}
    ];
    this.texto="";
  }

  ngOnInit(): void {
  }

  
}

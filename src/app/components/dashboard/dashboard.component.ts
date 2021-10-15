import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listaUsuarios: any;

  constructor(private usuarioService: UsuarioService) { 

    this.usuarioService.getUsuarios().subscribe(data => {
      this.listaUsuarios = data.data;
      console.log(data.data);
    });
  }

  ngOnInit(): void {
  }



  
}

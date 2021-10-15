import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  listaUsuarios: any;
  cargando: boolean = false;

  constructor(private usuarioService: UsuarioService) { 
    this.cargando = true;
    this.usuarioService.getUsuarios().subscribe(data => {
      this.cargando=false;
      this.listaUsuarios = data.data;
      
    });
  }
  ngOnInit(): void {
  }

}

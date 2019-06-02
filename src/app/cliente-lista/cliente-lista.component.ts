import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../entities/cliente';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  public clientes: Cliente[];
  
  constructor(private http: HttpClient){}

  ngOnInit() {
    this.listarTodos();
  }

  private listarTodos = () => {
    this.http.get('http://localhost:54046/api/Cliente/ListarTodos')
    .subscribe(response => {
      this.clientes = response as Cliente[];
    })
  }

}

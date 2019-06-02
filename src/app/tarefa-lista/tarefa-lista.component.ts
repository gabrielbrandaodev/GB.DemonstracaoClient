import { Tarefa } from '../entities/tarefa';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tarefa-lista',
  templateUrl: './tarefa-lista.component.html',
  styleUrls: ['./tarefa-lista.component.css']
})
export class TarefaListaComponent implements OnInit {
  public tarefas: Tarefa[];
  private listarTarefas;



  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.listarTodos();

    this.listarTarefas = setInterval(() => {
      this.listarTodos();
    }, 3000)
  }

  ngOnDestroy() {
    if (this.listarTarefas) {
      clearInterval(this.listarTarefas);
    }
  }

  private listarTodos = () => {
    this.http.get('http://localhost:54046/api/Tarefa/ListarUltimasTarefas')
      .subscribe(response => {
        this.tarefas = response as Tarefa[];
        this.tarefas.forEach(tarefa => {
          switch (tarefa.status) {
            case 0: tarefa.statusStr = "Não iniciada"; break;
            case 1: tarefa.statusStr = "Em Processamento"; break;
            case 2: tarefa.statusStr = "Cancelada"; break;
            case 3: tarefa.statusStr = "Finalizada"; break;
            case 4: tarefa.statusStr = "Erro"; break;
          }
        })
      })
  }

}

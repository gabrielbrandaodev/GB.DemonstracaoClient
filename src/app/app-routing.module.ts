import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaListaComponent } from './tarefa-lista/tarefa-lista.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: 'tarefas',
    component: TarefaListaComponent,
    data: { title: 'Lista de Tarefas' }
  },
  {
    path: 'clientes',
    component: ClienteListaComponent,
    data: { title: 'Lista de Clientes' }
  },
  {
    path: 'upload',
    component: UploadComponent,
    data: { title: 'Upload' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

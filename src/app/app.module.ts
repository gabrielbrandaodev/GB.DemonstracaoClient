import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { FilterPipe} from './pipes/filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { TarefaListaComponent } from './tarefa-lista/tarefa-lista.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    TarefaListaComponent,
    ClienteListaComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  mensagem: string;

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public uploadArquivo = (arquivo: File) => {

    if (!arquivo[0]) {
      return;
    }

    const formData = new FormData();
    formData.append('arquivo', arquivo[0], arquivo.name);
    this.http.post('http://localhost:54046/api/Cliente/ImportarArquivo', formData)
    .subscribe(res => this.router.navigate(['tarefas']))
  }

}

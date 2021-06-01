import { NoticiasService } from './service/noticias.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading = false;
  listNoticias: any[] = [];
  
  constructor(private _noticiasService: NoticiasService){

  }

  buscarNoticias(parametros: any){
    this.loading = true;
    this.listNoticias = [];

    setTimeout(() => {
      this._noticiasService.getNoticias(parametros).subscribe(data => {
        this.loading = false;
        this.listNoticias = data.articles;
      }, error =>{
        console.log(error);
        this.loading = false;
      })
    }, 1000);
  }
}

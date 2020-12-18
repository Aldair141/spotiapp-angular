import { Component } from '@angular/core';
import { SpotiappService } from '../../services/spotiapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  listaArtistas: any[] = [];
  objError: any = {};
  error: boolean;
  loading: boolean;

  constructor(private spotiapp: SpotiappService, private router: Router) { }

  buscarArtista(termino: string){
    this.error = false;
    this.loading = true;

    if(termino.trim().length > 0){
      this.spotiapp.getArtistas(termino).subscribe((data: any) => {
        this.listaArtistas = data;
        this.loading = false;
      }, (responseError) => {
        this.objError = responseError.error.error;
        this.error = true;
        this.loading = false;
      });
    }else{
      this.listaArtistas = [];
      this.loading = false;
    }
  }

  verTarjeta(id){
    this.router.navigate(["/artist", id]);
  }

}

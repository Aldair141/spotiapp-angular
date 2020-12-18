import { Component } from '@angular/core';
import { SpotiappService } from '../../services/spotiapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  listaAlbumes: any[] = [];
  errorObj: any = {};
  error: boolean;
  loading: boolean;

  constructor(private spot: SpotiappService, private router: Router) {
    this.error = false;
    this.loading = true;

    spot.getReleases().subscribe((data: any) => {
      this.listaAlbumes = data;
      this.loading = false;
    }, (responseError) => {
      this.errorObj = responseError.error.error;
      this.error = true;
      this.loading = false;
    });
  }

  verArtista(id){
    this.router.navigate(["/artist", id]);
  }
}
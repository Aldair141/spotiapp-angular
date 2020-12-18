import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotiappService } from '../../services/spotiapp.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  objArtista: any = {};
  loading: boolean;
  tracks: any[] = [];

  constructor(private activ: ActivatedRoute, private spotiApp: SpotiappService) {
    this.loading = true;
    activ.params.subscribe((data: any) => {
      this.getArtista(data["id"]);
      this.getTopTracks(data["id"]);
    });
  }

  getArtista(id: string){
    this.spotiApp.getArtista(id).subscribe((data: any) => {
      this.objArtista = data;
      this.loading = false;
    });
  }

  getTopTracks(id: string){
    this.spotiApp.getTopTracks(id).subscribe((data: any) => {
      this.tracks = data;
    });
  }

}

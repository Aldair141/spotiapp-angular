import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotiappService {

  constructor(private http: HttpClient) { }

  private getQuery(query: string){
    const cabecera = new HttpHeaders({
      "Authorization": "Bearer BQCzx02_RX4rLP0jHzUPHq02hvtMJjV9ZHB2ZoYGBz2SX_lPo7xNe7Yl6VQtDeHhNnr4kgNE07fXWHPaU14"
    });

    return this.http.get(`https://api.spotify.com/v1/${ query }`, { headers: cabecera });
  }

  getReleases(){
    return this.getQuery("browse/new-releases").pipe(map((data: any) => {
      return data["albums"].items;
    }));
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${ termino }&type=artist`).pipe(map((data: any) => {
      return data["artists"].items;
    }));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?market=us`).pipe(map((data: any) => {
      return data["tracks"];
    }));
  }
}
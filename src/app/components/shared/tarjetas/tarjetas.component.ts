import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent{ 

  @Input() items: any[] = [];
  @Output() artistaSeleccionado: EventEmitter<string>;

  constructor() {
    this.artistaSeleccionado = new EventEmitter();
  }

  seleccionarArtista(id: string){
    this.artistaSeleccionado.emit(id);
  }

  seleccionarImagenArtista(item: any){
    if(item.type === "artist"){
      this.seleccionarArtista(item.id);
    }
  }
}

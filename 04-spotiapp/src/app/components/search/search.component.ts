import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;
  mensaje: string;

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino) {

    this.loading = true;

    if (!termino) { termino = " " }
    this._spotifyService.getArtista(termino).subscribe(
      data => {
        this.artistas = data
        if (data.length === 0) { this.mensaje = "No hay ninguna coincidencia con su busqueda actual" } else { this.mensaje = ""; }
        if (termino === " "){this.mensaje = "";}
      },
      err => { },
      () => { this.loading = false; });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  loading:boolean;

  constructor(
    private activateRouter: ActivatedRoute,
    private spotifyservice: SpotifyService
  ) {
    this.loading = true;
    this.activateRouter.params.subscribe(params => {
      this.getArtista(params['id']);
    });
  }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.spotifyservice.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
  }
}

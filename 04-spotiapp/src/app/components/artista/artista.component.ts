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
  loadingArtists:boolean;
  loadingTracks:boolean;
  topTracks:string [] = [];

  constructor(
    private activateRouter: ActivatedRoute,
    private spotifyservice: SpotifyService
  ) {

    this.loadingArtists = true;
    this.loadingTracks = true;

    this.activateRouter.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.spotifyservice.getArtista(id).subscribe(artista => {
      this.artista = artista;
      this.loadingArtists = false;
    });
  }

  getTopTracks(id: string){
    this.spotifyservice.getTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks
      this.loadingTracks = false;
      console.log(this.topTracks);
    });
  }
}

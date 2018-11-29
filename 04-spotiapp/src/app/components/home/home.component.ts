import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  nuevasCanciones: any[] = [];
  loading: boolean
  error: boolean
  mensajeError: string
  inicio: boolean;

  constructor(private _SpotifyService: SpotifyService) {

    this.loading = true;
    this.error = false;
    this.inicio = true;


    this._SpotifyService.getNewReleases().subscribe(
      data => {
        this.nuevasCanciones = data;
      },
      err => {
        this.error = true;
        this.loading = false;
        this.mensajeError = err.error.error.message;

        /* this._SpotifyService.getNewToken().subscribe(data => {
          console.log(data['access_token']);
          let token = `Bearer ${data['access_token']}`;
          this._SpotifyService.getChangeToken(token);

        }) */

      },
      () => {
        this.loading = false;
      });


  }

  ngOnInit() {
  }

}

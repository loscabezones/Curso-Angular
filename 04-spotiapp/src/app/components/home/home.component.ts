import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  nuevasCanciones:any [] = [];
  loading:boolean
  error:boolean
  mensajeError:string

  constructor( private _SpotifyService:SpotifyService) {

    this.loading = true;
    this.error = false;

    this._SpotifyService.getNewReleases().subscribe((data:any)=>{
      this.nuevasCanciones = data;},
      err=>{
        this.error=true;
        this.loading = false;
        this.mensajeError = err.error.error.message;
      },
      ()=>{this.loading = false;});


   }

  ngOnInit() {
  }

}

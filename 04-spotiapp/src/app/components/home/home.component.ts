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
  error:boolean;
  mensajeError:string;

  constructor( private _SpotifyService:SpotifyService) {

    this.error = false;
    this.loading = true;

    this._SpotifyService.getNewReleases().subscribe((data:any)=>{
      this.nuevasCanciones = data;},
      err=>{ 
        this.loading = false;
        this.error = true;
        this.mensajeError = err.error.error.message
        console.log(err.error.error.message);
      },
      ()=>{this.loading = false;});


   }

  ngOnInit() {
  }

}

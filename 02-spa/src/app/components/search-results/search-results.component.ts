import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { Heroe } from 'src/app/modelos/heroe';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  heroes:Heroe [] = [];
  termino:string;

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService,
    private _router:Router) {

      this._activatedRoute.params.subscribe(params =>{
        this.heroes = this._heroesService.buscarHeroes( params['termino'] );
        this.termino = params['termino'];
        });

     }

  ngOnInit() {

  }

  verHeroe(idx:number){
    this._router.navigate(['heroe',idx])
  }

}

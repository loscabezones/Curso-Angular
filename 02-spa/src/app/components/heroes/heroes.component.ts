import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { Heroe } from 'src/app/modelos/heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe [] = [];


  constructor( private _heroesService:HeroesService) { }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}

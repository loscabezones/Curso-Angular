import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from 'src/app/modelos/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:Heroe;
  @Input() index:number;

  constructor( private _router:Router) { }

  ngOnInit() {
  }

  verHeroe(){
    this._router.navigate(['heroe',this.index])
  }

}

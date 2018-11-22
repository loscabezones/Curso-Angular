import { Component } from '@angular/core';


/* registerLocaleData(localeEs); */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "David";

  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  a = 0.234;

  salario: number = 1234.5;

  heroe: object = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "19"
    }
  }

  valorDePromesa = new Promise((resolve, reject)=>{
    setTimeout( ()=>resolve('Llego la data'), 3500 );
  })

  fecha:Date = new Date();


  

}

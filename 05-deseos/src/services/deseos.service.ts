import { Injectable } from "@angular/core";
import { Lista } from "../models";



@Injectable()
export class DeseosService {

    listas: Lista [] = [];


    constructor(){
       
        this.cargarStorage();

       /*  const lista1 = new Lista('Recoletar piedras del infinito');
        const lista2 = new Lista('Héroes a vencer');

        this.listas.push(lista1, lista2);
         */

    }

    agregarLista( Lista: Lista ){
        //añade una lista a nuestro array de listas
        this.listas.push( Lista );
        this,this.guardarStorage();
    }


    guardarStorage(){
        //fuardamos las listas en el local storage
        localStorage.setItem( 'data', JSON.stringify( this.listas ))
    }

    cargarStorage(){
        //comprobamos que existan datos en el local storage y su existen los guardamos en nuestro array listas
        if (localStorage.getItem('data')){
            this.listas = JSON.parse(localStorage.getItem('data'));
        }else{
            this.listas = [];    
        }

    }

}
import { Injectable } from "@angular/core";
import { Lista } from "../models";
import { TitleCasePipe } from "@angular/common";



@Injectable()
export class DeseosService {

    listas: Lista [] = [];


    constructor(){
       
        const lista1 = new Lista('Recoletar piedras del infinito');
        const lista2 = new Lista('Héroes a vencer');

        this.listas.push(lista1, lista2);

        console.log(this.listas);
        

    }

}
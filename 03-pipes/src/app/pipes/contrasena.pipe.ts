import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, show:boolean=true):string {

    show ? value = value.replace(/./g, "*") : value = value;
    
    return value;
  }

}

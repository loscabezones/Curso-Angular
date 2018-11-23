import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, show:boolean=true):string {

    if (show) {
      value = value.replace(/./g, "*");
    } else {
      value = value;
    }
    return value;
  }

}

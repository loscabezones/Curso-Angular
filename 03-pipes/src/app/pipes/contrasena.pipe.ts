import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, show:boolean=true): any {

    if (show === true) {
      value = value.replace(/./g, "*");
    } else {
      value = value;
    }
    return value;
  }

}

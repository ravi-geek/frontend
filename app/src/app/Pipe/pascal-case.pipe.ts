import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pascalCase'
})
export class PascalCasePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    console.log(value.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)));
    return value.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  }

}

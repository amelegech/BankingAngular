import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    console.log(value,"This is value");//percentage properte values are value
    console.log(args,"This args");// % we pass percent of array
    // 'Love';
    //return '%'
    return value + args[0];
  }

}

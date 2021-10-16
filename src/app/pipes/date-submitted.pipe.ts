import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'dateSubmitted'
})
export class DateSubmittedPipe implements PipeTransform {

  transform(value: any): any {
    let currentDate = new Date();
    let dateDifference = currentDate.getTime() - value.getTime();
    dateDifference /= 1000;
    dateDifference /= (3600);
    dateDifference /= 24;
    return Math.ceil(dateDifference) - 1;
  }

}
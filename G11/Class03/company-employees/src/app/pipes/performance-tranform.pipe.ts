import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'performanceTranform'
})
export class PerformanceTranformPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 20) {
      return 'Unsatisfactory'
    }
    if (value < 40) {
      return 'Needs Improvement'
    }
    if (value < 60) {
      return 'Meets Expectations'
    }
    if (value < 80) {
      return 'Exceeds Expectations'
    }
    if (value < 100) {
      return 'Outstanding'
    }
    return 'No data avilable'
  }

}

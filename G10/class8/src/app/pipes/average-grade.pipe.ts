import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'averageGrade',
})
export class AverageGradePipe implements PipeTransform {
  transform(grades: number[]): number {
    if (!grades?.length) {
      return 0;
    }

    const sum = grades.reduce((acc, num) => acc + num, 0);

    return sum / grades.length;
  }
}

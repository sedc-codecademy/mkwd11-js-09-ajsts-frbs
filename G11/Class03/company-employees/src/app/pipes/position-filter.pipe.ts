import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../interfaces/person.interface';

@Pipe({
  name: 'positionFilter'
})
export class PositionFilterPipe implements PipeTransform {

  transform(employees: Person[], position: string): Person[] {
    if (!position) {
      return employees;
    }

    return employees.filter(employee => {
      const filteredEmployess = employee.position.toLowerCase().includes(position.toLowerCase())
      return filteredEmployess;
    })
  }

}

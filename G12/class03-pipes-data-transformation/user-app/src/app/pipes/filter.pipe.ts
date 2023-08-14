import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: User[], filterValue: string): User[] {
    if (!filterValue) return value;

    console.log(filterValue);

    const filteredUsers = value.filter((user) =>
      user.name.toLowerCase().includes(filterValue.toLowerCase().trim())
    );

    return filteredUsers;
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AcademyTypeEnum } from 'src/app/interfaces/academy-type.enum';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  studentForm = new FormGroup({
    name: new FormControl<string>(''),
    group: new FormControl<string>(''),
    academy: new FormControl<string>(''),
    dateOfBirth: new FormControl<Date>(new Date()),
  });

  academies = Object.values(AcademyTypeEnum);
  groups: string[] = [
    'G1',
    'G2',
    'G3',
    'G4',
    'G5',
    'G6',
    'G7',
    'G8',
    'G9',
    'G10',
    'G11',
    'G12',
  ];

  onSubmit() {
    console.log('form submitted', this.studentForm);
  }
}

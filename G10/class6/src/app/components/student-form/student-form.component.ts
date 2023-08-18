import { StudentsService } from './../../services/students.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AcademyTypeEnum } from 'src/app/interfaces/academy-type.enum';
import { Student } from '../../interfaces/student.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  studentForm = new FormGroup({
    id: new FormControl<number>(Date.now()), // just a workaround, this is not common practice
    name: new FormControl<string>(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ])
    ),
    group: new FormControl<string>('', Validators.required),
    academy: new FormControl<string>('', Validators.required),
    dateOfBirth: new FormControl<string>('', Validators.required),
    grades: new FormControl<number[]>([]),
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

  get nameHasErrorRequired() {
    return this.studentForm.get('name')?.hasError('required');
  }

  get nameHasErrorMinLength() {
    return this.studentForm.get('name')?.hasError('minlength');
  }

  get nameHasErrorMaxLength() {
    return this.studentForm.get('name')?.hasError('maxlength');
  }

  constructor(
    private studentsService: StudentsService,
    private router: Router
  ) {}

  onSubmit() {
    // console.log('form submitted', this.studentForm.value);
    const student = {
      ...this.studentForm.value,
      dateOfBirth: new Date(this.studentForm.value.dateOfBirth ?? ''),
    };
    this.studentsService.addStudent(student as Student);
    this.router.navigate(['/students']);
  }
}

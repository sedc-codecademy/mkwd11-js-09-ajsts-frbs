import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AcademyTypeEnum } from 'src/app/interfaces/academy-type.enum';
import { Student } from '../../interfaces/student.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  studentForm = new FormGroup({
    id: new FormControl<number>(Date.now()), // just a workaround, this is not common practice
    name: new FormControl<string>(
      '',
      Validators.compose([
        // Validators.compose is used when we have more than 1 validator
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ])
    ),
    group: new FormControl<string>('', Validators.required),
    academy: new FormControl<string>('', Validators.required),
    dateOfBirth: new FormControl<string>('', Validators.required),
    grades: new FormControl<number[]>([]), // a form control that is not connected to the template
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
  isEditing: boolean = false; // we are editing if we have ID as parameter

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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const studentId = this.route.snapshot.params['id'];
    // console.log(studentId);
    this.isEditing = !!studentId;

    if (studentId) {
      const student = this.studentsService.getStudentById(Number(studentId));

      // console.log(student);

      if (student) {
        const studentValue = {
          ...student,
          dateOfBirth: new Date(student.dateOfBirth).toISOString(),
        };
        this.studentForm.patchValue(studentValue); // update form values

        // this.studentForm.get('name')?.patchValue('') this can be used to patch a single control
        // console.log(this.studentForm.value);
      }
    }
  }

  onSubmit() {
    // console.log('form submitted', this.studentForm.value);
    const student = {
      ...this.studentForm.value,
      dateOfBirth: new Date(this.studentForm.value.dateOfBirth ?? ''),
    };

    if (this.isEditing) {
      // we are updating
      this.studentsService.updateStudent(student as Student);
    } else {
      // we are creating
      this.studentsService.addStudent(student as Student);
    }

    this.router.navigate(['/students']);
  }
}

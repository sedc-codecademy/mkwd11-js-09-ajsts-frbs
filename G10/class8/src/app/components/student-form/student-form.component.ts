import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AcademyTypeEnum } from 'src/app/interfaces/academy-type.enum';
import { Student } from '../../interfaces/student.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { Subscription, map, mergeMap, tap } from 'rxjs';

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
    dateOfBirth: new FormControl<string>(
      formatDate(new Date().toISOString(), 'yyyy-MM-dd', 'en'),
      Validators.required
    ),
    grades: new FormControl<number[]>([]), // a form control that is not connected to the template
  });
  subscription: Subscription = new Subscription();
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

  get isNameInvalid() {
    return (
      this.studentForm.get('name')?.invalid &&
      (this.studentForm.get('name')?.touched ||
        this.studentForm.get('name')?.dirty)
    );
  }

  get isGroupInvalid() {
    return (
      this.studentForm.get('group')?.invalid &&
      (this.studentForm.get('group')?.touched ||
        this.studentForm.get('group')?.dirty)
    );
  }

  get isAcademyInvalid() {
    return (
      this.studentForm.get('academy')?.invalid &&
      (this.studentForm.get('academy')?.touched ||
        this.studentForm.get('academy')?.dirty)
    );
  }

  get isDateOfBirthInvalid() {
    return (
      this.studentForm.get('dateOfBirth')?.invalid &&
      (this.studentForm.get('dateOfBirth')?.touched ||
        this.studentForm.get('dateOfBirth')?.dirty)
    );
  }

  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.route.params
      .pipe(
        tap((value) => {
          debugger;
          return value;
        }),
        map((params) => Number(params['id'])),
        mergeMap((id) =>
          this.studentsService.students$.pipe(
            map((students) => students.find((s) => s.id === id) || null)
          )
        )
      )
      .subscribe((student: Student | null) => {
        if (student) {
          this.isEditing = true;
          const studentValue = {
            ...student,
            dateOfBirth: formatDate(
              new Date(student.dateOfBirth).toISOString(),
              'yyyy-MM-dd',
              'en'
            ),
          };
          this.studentForm.patchValue(studentValue);
        } else {
          this.router.navigate(['/form']);
        }
      });
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

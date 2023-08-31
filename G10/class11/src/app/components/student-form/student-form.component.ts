import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AcademyTypeEnum } from 'src/app/interfaces/academy-type.enum';
import { Student } from '../../interfaces/student.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { Subscription, map, mergeMap, tap } from 'rxjs';
import { NotificationsService } from 'src/app/services/notifications.service';
import { Store } from '@ngrx/store';
import { StudentsState } from 'src/app/interfaces/student-state.interface';
import { addStudent, updateStudent } from 'src/app/store/students.actions';
import { studentsSelector } from 'src/app/store/students.selectors';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  studentForm = new FormGroup({
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
    dateOfBirth: new FormControl<string>(
      formatDate(new Date().toISOString(), 'yyyy-MM-dd', 'en'),
      Validators.required
    ),
    grades: new FormControl<number[]>([]), // a form control that is not connected to the template
    location: new FormControl<string>(''),
  });
  subscriptions: Subscription[] = [];
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
  countries: string[] = [];
  studentId: string = '';

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
    private notificationsService: NotificationsService,
    private store: Store<StudentsState>,
    private router: Router,
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.route.params
        .pipe(
          map((params) => params['id']),
          mergeMap((id) =>
            this.store
              .select(studentsSelector)
              .pipe(
                map((students) => students.find((s) => s.id === id) || null)
              )
          )
        )
        .subscribe((student: Student | null) => {
          if (student) {
            this.studentId = student.id;
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

            if (this.studentId) {
              this.notificationsService.pushNotification(
                'Student not found',
                'error'
              );
            }
          }
        }),
      this.countriesService.getCountries().subscribe((countries) => {
        console.log(countries);
        this.countries = countries;
      })
    );

    this.studentForm.valueChanges.subscribe((value) => console.log(value));
  }

  onSubmit() {
    const student = {
      ...this.studentForm.value,
      id: this.studentId,
      dateOfBirth: new Date(this.studentForm.value.dateOfBirth ?? ''),
    };

    if (this.isEditing) {
      // we are updating
      this.store.dispatch(
        updateStudent({
          student: student as Student,
        })
      );
    } else {
      // we are creating
      this.store.dispatch(
        addStudent({
          student: student as Student,
        })
      );
      this.notificationsService.pushNotification(
        'Student added successfully',
        'success'
      );
    }

    this.router.navigate(['/students']);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}

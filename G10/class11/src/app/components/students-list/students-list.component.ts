import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchFilters } from 'src/app/interfaces/search-filters.interface';
import { SortByEnum, SortDirectionEnum } from '../../interfaces/sort.enum';
import { Observable, map, mergeMap, tap, Subscription } from 'rxjs';
import { NotificationsService } from 'src/app/services/notifications.service';
import { Store } from '@ngrx/store';
import { StudentsState } from '../../interfaces/student-state.interface';
import { studentsSelector } from '../../store/students.selectors';
import {
  deleteStudent,
  getStudents,
  gradeStudent,
} from 'src/app/store/students.actions';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit, OnDestroy {
  students$: Observable<Student[]> = new Observable<Student[]>();
  sortByEnum = SortByEnum;
  sortBy: SortByEnum = SortByEnum.name;
  sortDirection: SortDirectionEnum = SortDirectionEnum.asc;
  showGrading = new Map(); // this will create an empty map that is similar (visually) to an empty object {}

  // list of all filters values
  searchTerm: string = '';
  isPassing: boolean = false;
  selectedGroup: string = '';
  startDate: Date = new Date('1995-01-01');
  endDate: Date = new Date();

  // hardcoded value of all the groups
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
  subscription: Subscription = new Subscription();

  constructor(
    private notificationsService: NotificationsService,
    private store: Store<StudentsState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.students$ = this.store.select(studentsSelector);

    this.subscription = this.route.queryParams
      .pipe(
        tap((queryParams) => {
          this.searchTerm = queryParams['searchTerm'] || '';
          this.isPassing = !!queryParams['isPassing'];
          this.selectedGroup = queryParams['group'] || '';
          this.startDate = queryParams['startDate']
            ? new Date(queryParams['startDate'])
            : new Date('1995-01-01');
          this.endDate = queryParams['endDate']
            ? new Date(queryParams['endDate'])
            : new Date();
        })
      )
      .subscribe(() => this.prepareFiltersAndGetStudents());
  }

  sortStudents(sortBy: SortByEnum) {
    this.sortBy = sortBy;

    this.sortDirection =
      this.sortDirection === SortDirectionEnum.asc
        ? SortDirectionEnum.desc
        : SortDirectionEnum.asc;

    this.prepareFiltersAndGetStudents();
  }

  prepareFiltersAndGetStudents(): void {
    this.setQueryParams();

    this.store.dispatch(
      getStudents({
        filters: {
          searchTerm: this.searchTerm,
          isPassing: this.isPassing,
          group: this.selectedGroup,
          startDate: this.startDate,
          endDate: this.endDate,
          sortBy: this.sortBy,
          sortDirection: this.sortDirection,
        },
      })
    );
  }

  setQueryParams() {
    let queryParams: SearchFilters = {
      sortBy: this.sortBy,
      sortDirection: this.sortDirection,
    };

    if (this.searchTerm) {
      queryParams.searchTerm = this.searchTerm;
    }

    if (this.isPassing) {
      queryParams.isPassing = this.isPassing;
    }

    if (this.selectedGroup) {
      queryParams.group = this.selectedGroup;
    }

    if (this.startDate) {
      queryParams.startDate = this.startDate;
    }

    if (this.endDate) {
      queryParams.endDate = this.endDate;
    }

    this.router.navigate([], {
      queryParams,
    });
  }

  onKeyUp(e: any) {
    this.searchTerm = e.target.value;
    this.prepareFiltersAndGetStudents();
  }

  onIsPassingChange(e: any) {
    this.isPassing = e.target.checked;
    this.prepareFiltersAndGetStudents();
  }

  onGroupSelect(e: any) {
    this.selectedGroup = e.target.value;
    this.prepareFiltersAndGetStudents();
  }

  onStartDateChange(e: any) {
    this.startDate = new Date(e.target.value);
    this.prepareFiltersAndGetStudents();
  }

  onEndDateChange(e: any) {
    this.endDate = new Date(e.target.value);
    this.prepareFiltersAndGetStudents();
  }

  onChangedGrade({ studentId, grade }: { studentId: string; grade: number }) {
    this.showGrading.set(studentId, false);

    this.store.dispatch(
      gradeStudent({
        studentId,
        grade,
      })
    );
  }

  onShowGrading(studentId: string) {
    this.showGrading.set(studentId, !this.showGrading.get(studentId));
  }

  onEdit(studentId: string) {
    this.router.navigate(['/form', studentId]);
  }

  onDelete(id: string) {
    this.store.dispatch(
      deleteStudent({
        id,
      })
    );
    this.notificationsService.pushNotification(
      'Student deleted successfully',
      'success'
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

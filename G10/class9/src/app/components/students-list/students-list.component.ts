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
import { getStudents } from 'src/app/store/students.actions';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit, OnDestroy {
  students$: Observable<Student[]> = new Observable<Student[]>();
  sortByEnum = SortByEnum;
  sortBy: SortByEnum = SortByEnum.id;
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

    this.students$ = this.students$.pipe(
      map((students) => {
        return students.sort((a, b) => {
          // Sorting ascending
          if (this.sortDirection === SortDirectionEnum.asc) {
            // Sort by name
            if (
              this.sortBy === SortByEnum.name ||
              this.sortBy === SortByEnum.academy
            ) {
              // sorting strings is done with localeCompare
              return a[this.sortBy]
                .toLowerCase()
                .localeCompare(b[this.sortBy].toLowerCase());
            }
            // Sort by group
            if (this.sortBy === SortByEnum.group) {
              // we remove the letter G so that we can compare the numbers
              return (
                Number(a.group.replace('G', '')) -
                Number(b.group.replace('G', ''))
              );
            }
            // Sort by avg grade
            if (this.sortBy === SortByEnum.avgGrade) {
              // we are comparing the sum of grades
              return (
                a.grades.reduce((sum, curr) => sum + curr, 0) -
                b.grades.reduce((sum, curr) => sum + curr, 0)
              );
            }
            return a[this.sortBy] > b[this.sortBy] ? 1 : -1;
            // Sorting descending
          } else {
            // else should be same as the above statement, we just change the places of a and b
            // Sort by name
            if (
              this.sortBy === SortByEnum.name ||
              this.sortBy === SortByEnum.academy
            ) {
              return b[this.sortBy]
                .toLocaleLowerCase()
                .localeCompare(a[this.sortBy].toLocaleLowerCase());
            }
            // Sort by group
            if (this.sortBy === SortByEnum.group) {
              return (
                Number(b.group.replace('G', '')) -
                Number(a.group.replace('G', ''))
              );
            }
            // Sort by avg grade
            if (this.sortBy === SortByEnum.avgGrade) {
              return (
                b.grades.reduce((sum, curr) => sum + curr, 0) -
                a.grades.reduce((sum, curr) => sum + curr, 0)
              );
            }
            return a[this.sortBy] < b[this.sortBy] ? 1 : -1;
          }
        });
      })
    );

    this.sortDirection =
      this.sortDirection === SortDirectionEnum.asc
        ? SortDirectionEnum.desc
        : SortDirectionEnum.asc;
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
        },
      })
    );
  }

  setQueryParams() {
    let queryParams: SearchFilters = {};

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

  onChangedGrade({ studentId, grade }: { studentId: number; grade: number }) {
    this.showGrading.set(studentId, false);

    // this.studentsService.gradeStudent(studentId, grade);
  }

  onShowGrading(studentId: number) {
    this.showGrading.set(studentId, !this.showGrading.get(studentId));
  }

  onEdit(studentId: number) {
    this.router.navigate(['/form', studentId]);
  }

  onDelete(studentId: number) {
    // this.studentsService.deleteStudent(studentId);
    this.notificationsService.pushNotification(
      'Student deleted successfully',
      'success'
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

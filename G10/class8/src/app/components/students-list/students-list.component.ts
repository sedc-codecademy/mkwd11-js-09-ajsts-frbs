import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student.interface';
import { StudentsService } from '../../services/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchFilters } from 'src/app/interfaces/search-filters.interface';
import { SortByEnum, SortDirectionEnum } from '../../interfaces/sort.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {
  students$: Observable<Student[]> = new Observable<Student[]>();
  sortByEnum = SortByEnum;
  sortBy: SortByEnum = SortByEnum.id;
  sortDirection: SortDirectionEnum = SortDirectionEnum.asc;
  showGrading = new Map(); // this will create an empty map that is similar (visually) to an empty object {}

  // list of all filters values
  searchTerm: string = '';
  isPassing: boolean = false;
  selectedGroup: string = '';
  startDate: Date | undefined;
  endDate: Date | undefined;

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

  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // fetching the query params from the URL
    this.searchTerm = this.route.snapshot.queryParams['searchTerm'] || '';
    this.isPassing = !!this.route.snapshot.queryParams['isPassing'];
    this.selectedGroup = this.route.snapshot.queryParams['group'] || '';
    this.startDate = !!this.route.snapshot.queryParams['startDate']
      ? new Date(this.route.snapshot.queryParams['startDate'])
      : undefined;
    this.endDate = !!this.route.snapshot.queryParams['endDate']
      ? new Date(this.route.snapshot.queryParams['endDate'])
      : undefined;

    this.students$ = this.studentsService.students$;
    // we are assigning the value from the students (from the service) observable to the local component observable
    // when using it like this without a subscribe attached, we must use the async pipe in the template
  }

  sortStudents(sortBy: SortByEnum) {
    // this.sortBy = sortBy;
    // this.students = this.students.sort((a, b) => {
    //   // Sorting ascending
    //   if (this.sortDirection === SortDirectionEnum.asc) {
    //     // Sort by name
    //     if (
    //       this.sortBy === SortByEnum.name ||
    //       this.sortBy === SortByEnum.academy
    //     ) {
    //       // sorting strings is done with localeCompare
    //       return a[this.sortBy]
    //         .toLowerCase()
    //         .localeCompare(b[this.sortBy].toLowerCase());
    //     }
    //     // Sort by group
    //     if (this.sortBy === SortByEnum.group) {
    //       // we remove the letter G so that we can compare the numbers
    //       return (
    //         Number(a.group.replace('G', '')) - Number(b.group.replace('G', ''))
    //       );
    //     }
    //     // Sort by avg grade
    //     if (this.sortBy === SortByEnum.avgGrade) {
    //       // we are comparing the sum of grades
    //       return (
    //         a.grades.reduce((sum, curr) => sum + curr, 0) -
    //         b.grades.reduce((sum, curr) => sum + curr, 0)
    //       );
    //     }
    //     return a[this.sortBy] > b[this.sortBy] ? 1 : -1;
    //     // Sorting descending
    //   } else {
    //     // else should be same as the above statement, we just change the places of a and b
    //     // Sort by name
    //     if (
    //       this.sortBy === SortByEnum.name ||
    //       this.sortBy === SortByEnum.academy
    //     ) {
    //       return b[this.sortBy]
    //         .toLocaleLowerCase()
    //         .localeCompare(a[this.sortBy].toLocaleLowerCase());
    //     }
    //     // Sort by group
    //     if (this.sortBy === SortByEnum.group) {
    //       return (
    //         Number(b.group.replace('G', '')) - Number(a.group.replace('G', ''))
    //       );
    //     }
    //     // Sort by avg grade
    //     if (this.sortBy === SortByEnum.avgGrade) {
    //       return (
    //         b.grades.reduce((sum, curr) => sum + curr, 0) -
    //         a.grades.reduce((sum, curr) => sum + curr, 0)
    //       );
    //     }
    //     return a[this.sortBy] < b[this.sortBy] ? 1 : -1;
    //   }
    // });
    // this.sortDirection =
    //   this.sortDirection === SortDirectionEnum.asc
    //     ? SortDirectionEnum.desc
    //     : SortDirectionEnum.asc;
  }

  prepareFiltersAndGetStudents(): Student[] {
    this.setQueryParams();

    return this.studentsService.searchStudents({
      searchTerm: this.searchTerm,
      isPassing: this.isPassing,
      group: this.selectedGroup,
      startDate: this.startDate,
      endDate: this.endDate,
    });
  }

  setQueryParams() {
    let queryParams: SearchFilters = {};

    // If a filter exists, we are going to assign the value to the query params

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

    // updating the query params
    this.router.navigate([], {
      queryParams,
    });
  }

  onKeyUp(e: any) {
    this.searchTerm = e.target.value;
    // this.students = this.prepareFiltersAndGetStudents();
  }

  onIsPassingChange(e: any) {
    this.isPassing = e.target.checked;
    // this.students = this.prepareFiltersAndGetStudents();
  }

  onGroupSelect(e: any) {
    this.selectedGroup = e.target.value;
    // this.students = this.prepareFiltersAndGetStudents();
  }

  onStartDateChange(e: any) {
    this.startDate = new Date(e.target.value);
    // this.students = this.prepareFiltersAndGetStudents();
  }

  onEndDateChange(e: any) {
    this.endDate = new Date(e.target.value);
    // this.students = this.prepareFiltersAndGetStudents();
  }

  onChangedGrade({ studentId, grade }: { studentId: number; grade: number }) {
    this.showGrading.set(studentId, false);

    this.studentsService.gradeStudent(studentId, grade);
  }

  onShowGrading(studentId: number) {
    this.showGrading.set(studentId, !this.showGrading.get(studentId));
  }

  onEdit(studentId: number) {
    this.router.navigate(['/form', studentId]);
  }

  onDelete(studentId: number) {
    this.studentsService.deleteStudent(studentId);
  }
}

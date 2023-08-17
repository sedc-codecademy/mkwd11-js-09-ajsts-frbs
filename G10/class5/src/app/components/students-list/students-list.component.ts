import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student.interface';
import { StudentsService } from '../../services/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchFilters } from 'src/app/interfaces/search-filters.interface';
import { SortByEnum, SortDirectionEnum } from '../../interfaces/sort.enum';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {
  students: Student[] = []; // local copy of the list of students, this can be both all students or filtered students depending on if we are searching something or not
  sortByEnum = SortByEnum;
  sortBy: SortByEnum = SortByEnum.id;
  sortDirection: SortDirectionEnum = SortDirectionEnum.asc;
  showGrading = new Map(); // {}

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
    this.searchTerm = this.route.snapshot.queryParams['searchTerm'] || '';
    this.isPassing = !!this.route.snapshot.queryParams['isPassing'];
    this.selectedGroup = this.route.snapshot.queryParams['group'] || '';
    this.startDate = !!this.route.snapshot.queryParams['startDate']
      ? new Date(this.route.snapshot.queryParams['startDate'])
      : undefined;
    this.endDate = !!this.route.snapshot.queryParams['endDate']
      ? new Date(this.route.snapshot.queryParams['endDate'])
      : undefined;

    this.students = this.prepareFiltersAndGetStudents();
  }

  sortStudents(sortBy: SortByEnum) {
    this.sortBy = sortBy;

    this.students = this.students.sort((a, b) => {
      // Sorting ascending
      if (this.sortDirection === SortDirectionEnum.asc) {
        // Sort by name
        if (
          this.sortBy === SortByEnum.name ||
          this.sortBy === SortByEnum.academy
        ) {
          return a[this.sortBy]
            .toLocaleLowerCase()
            .localeCompare(b[this.sortBy].toLocaleLowerCase());
        }

        // Sort by group
        if (this.sortBy === SortByEnum.group) {
          return (
            Number(a.group.replace('G', '')) - Number(b.group.replace('G', ''))
          );
        }

        // Sort by avg grade
        if (this.sortBy === SortByEnum.avgGrade) {
          return (
            a.grades.reduce((sum, curr) => sum + curr, 0) -
            b.grades.reduce((sum, curr) => sum + curr, 0)
          );
        }

        return a[this.sortBy] > b[this.sortBy] ? 1 : -1;
        // Sorting descending
      } else {
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
            Number(b.group.replace('G', '')) - Number(a.group.replace('G', ''))
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

    this.sortDirection =
      this.sortDirection === SortDirectionEnum.asc
        ? SortDirectionEnum.desc
        : SortDirectionEnum.asc;
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
    // console.log(e.target.value);
    this.searchTerm = e.target.value;

    if (e.target.value) {
      this.router.navigate([], {
        queryParams: {
          searchTerm: e.target.value,
        },
      });
    } else {
      this.router.navigate([], {
        queryParams: {},
      });
    }

    this.students = this.prepareFiltersAndGetStudents();
  }

  onIsPassingChange(e: any) {
    this.isPassing = e.target.checked;
    this.students = this.prepareFiltersAndGetStudents();
  }

  onGroupSelect(e: any) {
    this.selectedGroup = e.target.value;
    this.students = this.prepareFiltersAndGetStudents();
  }

  onStartDateChange(e: any) {
    this.startDate = new Date(e.target.value);
    this.students = this.prepareFiltersAndGetStudents();
  }

  onEndDateChange(e: any) {
    this.endDate = new Date(e.target.value);
    this.students = this.prepareFiltersAndGetStudents();
  }

  onChangedGrade({ studentId, grade }: { studentId: number; grade: number }) {
    console.log(grade, studentId);
    this.showGrading.set(studentId, false);

    this.studentsService.gradeStudent(studentId, grade);

    this.students = this.prepareFiltersAndGetStudents();

    console.log('OD KOMPONENTATA', this.students);

    // const studentIndex = this.students.findIndex((s) => s.id === studentId);
    // // this.students[studentIndex].grades.push(grade);

    // this.students[studentIndex] = {
    //   ...this.students[studentIndex],
    //   grades: [...this.students[studentIndex].grades, grade],
    // };
  }

  onShowGrading(studentId: number) {
    console.log('onShowGrading', studentId);
    // {
    // key === id of the student
    // value === boolean (is it opened?)
    // }

    this.showGrading.set(studentId, !this.showGrading.get(studentId));
  }
}

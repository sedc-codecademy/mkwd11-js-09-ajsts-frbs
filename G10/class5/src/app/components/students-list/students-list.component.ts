import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student.interface';
import { StudentsService } from '../../services/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchFilters } from 'src/app/interfaces/search-filters.interface';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {
  students: Student[] = []; // local copy of the list of students, this can be both all students or filtered students depending on if we are searching something or not

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

    console.log(
      this.searchTerm,
      this.isPassing,
      this.selectedGroup,
      this.startDate,
      this.endDate
    );

    this.students = this.prepareFiltersAndGetStudents();
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
}

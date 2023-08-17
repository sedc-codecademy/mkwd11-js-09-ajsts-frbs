import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student.interface';
import { StudentsService } from '../../services/students.service';

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

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.students = this.studentsService.getStudents(); // assigning all students on initialization of the component
  }

  onKeyUp(e: any) {
    // console.log(e.target.value);
    this.searchTerm = e.target.value;
    this.students = this.studentsService.searchStudents({
      searchTerm: e.target.value,
      isPassing: this.isPassing,
      group: this.selectedGroup,
      startDate: this.startDate,
      endDate: this.endDate,
    });
  }

  onIsPassingChange(e: any) {
    // console.log(e.target.checked);
    this.isPassing = e.target.checked;
    this.students = this.studentsService.searchStudents({
      isPassing: e.target.checked,
      searchTerm: this.searchTerm,
      group: this.selectedGroup,
      startDate: this.startDate,
      endDate: this.endDate,
    });
  }

  onGroupSelect(e: any) {
    // console.log(e.target.value);
    this.selectedGroup = e.target.value;
    this.students = this.studentsService.searchStudents({
      group: e.target.value,
      searchTerm: this.searchTerm,
      isPassing: this.isPassing,
      startDate: this.startDate,
      endDate: this.endDate,
    });
  }

  onStartDateChange(e: any) {
    // console.log(e.target.value, new Date(e.target.value));
    this.startDate = new Date(e.target.value);
    this.students = this.studentsService.searchStudents({
      group: this.selectedGroup,
      searchTerm: this.searchTerm,
      isPassing: this.isPassing,
      startDate: new Date(e.target.value),
      endDate: this.endDate,
    });
  }

  onEndDateChange(e: any) {
    // console.log(e.target.value, new Date(e.target.value));
    this.endDate = new Date(e.target.value);
    this.students = this.studentsService.searchStudents({
      group: this.selectedGroup,
      searchTerm: this.searchTerm,
      isPassing: this.isPassing,
      startDate: this.startDate,
      endDate: new Date(e.target.value),
    });
  }
}

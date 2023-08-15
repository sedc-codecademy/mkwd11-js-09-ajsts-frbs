import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student.interface';
import { AcademyTypeEnum } from '../../interfaces/academy-type.enum';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {
  students: Student[] = [];
  searchTerm: string = '';
  isPassing: boolean = false;

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.students = this.studentsService.getStudents();
  }

  onKeyUp(e: any) {
    // console.log(e.target.value);
    this.searchTerm = e.target.value;
    this.students = this.studentsService.searchStudents({
      searchTerm: e.target.value,
      isPassing: this.isPassing,
    });
  }

  onIsPassingChange(e: any) {
    // console.log(e.target.checked);
    this.isPassing = e.target.checked;
    this.students = this.studentsService.searchStudents({
      isPassing: e.target.checked,
      searchTerm: this.searchTerm,
    });
  }
}

import { AcademyTypeEnum } from './../../interfaces/academy-type.enum';
import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student.interface';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  developmentStudents: Student[] = [];
  designStudents: Student[] = [];
  devopsStudents: Student[] = [];
  qaStudents: Student[] = [];
  students: Student[] = [];

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    // this.students = this.studentsService.getStudents();
    this.calculateTopStudents();
  }

  calculateTopStudents() {
    this.developmentStudents =
      this.studentsService.getTopThreeStudentsPerAcademy(
        AcademyTypeEnum.development
      );
    this.devopsStudents = this.studentsService.getTopThreeStudentsPerAcademy(
      AcademyTypeEnum.devops
    );
    this.designStudents = this.studentsService.getTopThreeStudentsPerAcademy(
      AcademyTypeEnum.design
    );
    this.qaStudents = this.studentsService.getTopThreeStudentsPerAcademy(
      AcademyTypeEnum.qa
    );
  }
}

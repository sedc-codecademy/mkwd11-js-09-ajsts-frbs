import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../interfaces/student.interface';
import { Location } from '@angular/common';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  student: Student | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private studentsService: StudentsService
  ) {}

  ngOnInit() {
    let id: string = this.route.snapshot.params['id'];
    // console.log('id', id);

    // this.student = this.studentsService.getStudentById(Number(id));
  }

  goBack() {
    this.location.back(); // mimics the browser back button behavior
  }
}

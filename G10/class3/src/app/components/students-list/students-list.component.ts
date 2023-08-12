import { Component } from '@angular/core';
import { Student } from '../../interfaces/student.interface';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent {
  students: Student[] = [];
}

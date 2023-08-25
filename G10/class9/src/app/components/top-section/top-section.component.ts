import { Component, Input } from '@angular/core';
import { Student } from 'src/app/interfaces/student.interface';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css'],
})
export class TopSectionComponent {
  @Input() academyName: string = '';
  @Input() students: Student[] = [];
}

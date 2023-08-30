import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-add-grades',
  templateUrl: './add-grades.component.html',
  styleUrls: ['./add-grades.component.css'],
})
export class AddGradesComponent {
  @Input() studentId: string = '';
  @Output() changedValue: EventEmitter<{ grade: number; studentId: string }> =
    new EventEmitter<{ grade: number; studentId: string }>();
  rangeValue: number = 1;

  addGrade() {
    this.changedValue.emit({
      grade: this.rangeValue,
      studentId: this.studentId,
    });
  }
}

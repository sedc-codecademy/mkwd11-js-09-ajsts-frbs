import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-add-grades',
  templateUrl: './add-grades.component.html',
  styleUrls: ['./add-grades.component.css'],
})
export class AddGradesComponent {
  @Input() studentId: number = 0;
  @Output() changedValue: EventEmitter<{ grade: number; studentId: number }> =
    new EventEmitter<{ grade: number; studentId: number }>();
  rangeValue: number = 1;

  addGrade() {
    this.changedValue.emit({
      grade: this.rangeValue,
      studentId: this.studentId,
    });
  }
}

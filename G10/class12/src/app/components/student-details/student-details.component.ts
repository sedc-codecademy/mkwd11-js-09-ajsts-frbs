import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../interfaces/student.interface';
import { Location } from '@angular/common';
import { StudentsService } from '../../services/students.service';
import { Subscription, map, mergeMap, tap } from 'rxjs';
import { StudentsState } from 'src/app/interfaces/student-state.interface';
import { Store } from '@ngrx/store';
import { studentsSelector } from 'src/app/store/students.selectors';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit, OnDestroy {
  student: Student | undefined;
  subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<StudentsState>
  ) {}

  ngOnInit() {
    this.subscription = this.route.params
      .pipe(
        map((params) => params['id']),
        mergeMap((id) =>
          this.store
            .select(studentsSelector)
            .pipe(map((students) => students.find((s) => s.id === id)))
        )
      )
      .subscribe((student) => {
        this.student = student;
      });
    // merges the params stream with the students stream and provides a single student object
    // .subscribe((student) => {
    //   this.student = student;
    // });
  }

  goBack() {
    this.location.back(); // mimics the browser back button behavior
  }

  // Don't forget to unsubscribe ALWAYS
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

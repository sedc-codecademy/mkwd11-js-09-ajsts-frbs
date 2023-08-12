import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    console.log('id', id);
  }
}

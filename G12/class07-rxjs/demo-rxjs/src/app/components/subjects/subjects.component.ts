import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ObservablesService } from 'src/app/services/observables.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {
  nameInput: FormControl;
  fruitInput: FormControl;
  fruitsSubject$ = this.observablesService.fruitsSubject$;

  nameArray: string[] = [];

  constructor(private observablesService: ObservablesService) {}

  ngOnInit(): void {
    this.nameInput = new FormControl('');
    this.fruitInput = new FormControl('');

    this.observablesService.nameSubject$.subscribe((value) => {
      console.log(value);
      this.nameArray = value;

      console.log(this.nameArray);
    });

    
    // Always next a subject after the subscription is setup
    this.observablesService.getNames();
  }

  onAddName() {
    this.observablesService.addName(this.nameInput.value);
  }

  onAddFruit() {
    this.observablesService.addFruit(this.fruitInput.value);
  }
}

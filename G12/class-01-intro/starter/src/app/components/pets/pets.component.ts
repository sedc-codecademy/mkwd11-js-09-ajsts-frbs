import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent {
  parentTitle = 'I am coming from the parent';

  childTitle = '';

  // 4. Use a method in the parent to read the data emitted from the child
  onTitleRecieve(output: string) {
    console.log('This is from the child', output);
    console.log('title recieved');
    this.childTitle = output;
  }
}

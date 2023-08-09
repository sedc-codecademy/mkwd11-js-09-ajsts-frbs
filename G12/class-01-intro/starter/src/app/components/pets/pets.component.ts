import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent {
  // This needs to be sent down into the pet ( child ) component
  parentTitle = 'I am coming from the parent';

  // This needs to be updated by the pet ( child ) component
  childTitle = '';

  // 4. Use a method in the parent to read the data emitted from the child
  onTitleRecieve(output: string) {
    console.log('This is from the child', output);
    console.log('title recieved');
    this.childTitle = output;
  }
}

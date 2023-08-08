import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss'],
})
export class PetComponent {
  // If a property in a class is decorated with @Input() that means that the parent component can use property binding to send data to the child
  @Input() titleFromParent: string;
  @Input() petType: string;

  @Output() titleOutput = new EventEmitter<string>();

  // 1. Define local method that will trigger on user action
  onSendTitle() {
    console.log('send title works');
    // Here we wan't to emit an event to update the parent
    // 2. Emit an event when the method is called
    this.titleOutput.emit('Child Title');
  }
}

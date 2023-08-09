import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket.interface';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;

  @Output() ticketOutput = new EventEmitter<Ticket>();

  constructor() {}

  ngOnInit(): void {}

  // 1. Create local method in the child that is called when something changes
  onTicketClick() {
    console.log('local ticket method clicked');
    // 2. Emit the data to the parent
    this.ticketOutput.emit(this.ticket);
  }
}

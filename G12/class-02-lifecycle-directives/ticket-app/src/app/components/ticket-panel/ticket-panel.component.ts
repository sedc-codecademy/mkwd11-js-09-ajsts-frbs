import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TicketStatus } from 'src/app/interfaces/ticket-status.enum';
import { Ticket } from 'src/app/interfaces/ticket.interface';

@Component({
  selector: 'app-ticket-panel',
  templateUrl: './ticket-panel.component.html',
  styleUrls: ['./ticket-panel.component.scss'],
})
export class TicketPanelComponent implements OnInit, OnChanges {
  @Input() ticketList: Ticket[];

  filteredTickets: Ticket[];

  // To reference enums in template always declare them as properties in the class
  ticketStatus = TicketStatus;

  isTicketDetailsShown = false;
  selectedTicket: Ticket = null;

  constructor() {
    console.log('constructor called');
    console.log(this.ticketList);
  }

  ngOnInit(): void {
    // Called after all properties and inputs are initialized in the component and called only once
    console.log('ng oninit called');
    console.log('Ticket list', this.ticketList);
    this.filteredTickets = this.ticketList;
  }

  // Method for updated filtered tickets by a status filter
  filterTicketsByStatus(status: TicketStatus) {
    this.filteredTickets = this.ticketList.filter(
      (ticket) => ticket.status === status
    );
  }

  // Method for resetting tickets back to starting data ( this.tickets )
  resetTickets() {
    this.filteredTickets = this.ticketList;
  }

  onTicketSelect(ticket: Ticket) {
    console.log('from the parent');
    console.log(ticket);
    this.selectedTicket = ticket;
    this.isTicketDetailsShown = true;
  }

  onDetailsHide() {
    this.isTicketDetailsShown = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called whenever an input of a component changes
    console.log('ng on changes called');
    console.log(changes);
  }

  ngAfterViewInit() {
    // Called after the content of the template is rendered in the browser ( after the dom is updated with the template )
    console.log('after view init');
  }

  ngOnDestroy() {
    // Called before the component is removed from the view ( similar to componentWillUnmount)
    console.log('ondestroy called');
  }
}

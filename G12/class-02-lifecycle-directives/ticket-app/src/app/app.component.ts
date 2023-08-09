// Rules added in tsconfig.json to make lives easier for everyone
// "strictPropertyInitialization": false,
// "strictNullChecks": false,

import { Component, OnInit } from '@angular/core';
import { Ticket } from './interfaces/ticket.interface';
import { TicketStatus } from './interfaces/ticket-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ticket-app';

  randomColor = '#FFFFFF';

  ticketList: Ticket[] = [
    {
      id: 1,
      title: 'Mouse doesnt work',
      description: 'My mouse stopped working. Please help!',
      assignee: 'Jon Doe',
      status: TicketStatus.NEW,
    },
    {
      id: 2,
      title: 'Monitor doesnt work',
      description: 'My monitor stopped working. Please help!',
      assignee: 'Jane Doe',
      status: TicketStatus.NEW,
    },
    {
      id: 3,
      title: 'Keyboard doesnt work',
      description:
        'My keyboard stopped working. I spilled soda on it. Please help!',
      assignee: 'Jack Smith',
      status: TicketStatus.IN_PROGRESS,
    },
    {
      id: 4,
      title: 'Car doesnt work',
      description: 'My car stopped working. I spilled soda on it. Please help!',
      assignee: 'Jon Doe',
      status: TicketStatus.IN_PROGRESS,
    },
    {
      id: 5,
      title: 'Computer doesnt work',
      description:
        'My computer stopped working. It fell from the third floor! Please help!',
      assignee: 'Nick Jacobs',
      status: TicketStatus.DONE,
    },
    {
      id: 6,
      title: `Brain doesn't work`,
      description: `Angular is too hard, i don't know which panel i'm in`,
      assignee: 'Dani Kitancheva',
      status: TicketStatus.NEW,
    },
  ];

  ngOnInit(): void {
    // setInterval(() => {
    //   this.generateRandomColor();
    // }, 500);
  }

  generateRandomColor() {
    const randomColorHex = Math.floor(Math.random() * 16777215).toString(16);

    this.randomColor = `#${randomColorHex}`;

    console.log(this.randomColor);
  }
}

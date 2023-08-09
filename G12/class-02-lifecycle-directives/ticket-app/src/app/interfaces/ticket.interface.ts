import { TicketStatus } from './ticket-status.enum';

export interface Ticket {
  id: number;
  title: string;
  description: string;
  assignee: string;
  status: TicketStatus; // to be updated
}

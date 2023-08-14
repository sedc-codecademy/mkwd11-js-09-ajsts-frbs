import { Address } from './address.interface';

export interface User {
  id: number | string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  dateOfBirth: Date;
  hourlyRate: number | string;
  rating: number;
}

import { Address } from "./address.interface"

export interface Person {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    address: Address;
    telephoneNumber: string;
    position: string;
    salary: number;
    yearsOfService: number;
    performance: number;
    startDate: Date
}
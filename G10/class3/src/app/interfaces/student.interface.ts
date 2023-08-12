import { AcademyType } from './academy-type.enum';

export interface Student {
  id: number;
  name: string;
  dateOfBirth: Date;
  academy: AcademyType;
  group: string;
  grades: number[];
}

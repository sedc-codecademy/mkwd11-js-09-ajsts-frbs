import { AcademyTypeEnum } from './academy-type.enum';

export interface Student {
  id: string;
  name: string;
  dateOfBirth: Date;
  academy: AcademyTypeEnum;
  group: string;
  grades: number[];
  location?: string;
}

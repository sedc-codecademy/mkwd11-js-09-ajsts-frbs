import { AcademyTypeEnum } from './academy-type.enum';

export interface Student {
  id: number;
  name: string;
  dateOfBirth: Date;
  academy: AcademyTypeEnum;
  group: string;
  grades: number[];
}

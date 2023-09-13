import { SearchFilters } from './search-filters.interface';
import { Student } from './student.interface';

export interface StudentsState {
  students: Student[];
  isLoading: boolean;
  filters: SearchFilters;
  error: string;
}

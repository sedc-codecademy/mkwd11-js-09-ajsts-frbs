import { SortDirectionEnum } from './sort.enum';
export interface SearchFilters {
  searchTerm?: string;
  isPassing?: boolean;
  group?: string;
  startDate?: Date;
  endDate?: Date;
  sortBy: string;
  sortDirection: SortDirectionEnum;
}

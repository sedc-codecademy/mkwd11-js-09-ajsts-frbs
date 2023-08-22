import { SearchFilters } from './../interfaces/search-filters.interface';
import { Injectable } from '@angular/core';
import { AcademyTypeEnum } from '../interfaces/academy-type.enum';
import { Student } from '../interfaces/student.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // determines the scope of the service. This is deprecated, in future versions, this will be the default behavior
})
export class StudentsService {
  private studentsDefaultData: Student[] = [
    {
      id: 1,
      name: 'Aleksandar Ivanov',
      dateOfBirth: new Date('2000-01-15'),
      academy: AcademyTypeEnum.development,
      group: 'G1',
      grades: [9, 2, 7, 9, 10],
    },
    {
      id: 2,
      name: 'Ana Petrova',
      dateOfBirth: new Date('1999-06-28'),
      academy: AcademyTypeEnum.digitalMarketing,
      group: 'G2',
      grades: [8, 7, 9, 3, 7],
    },
    {
      id: 3,
      name: 'Bojan Georgievski',
      dateOfBirth: new Date('2000-12-10'),
      academy: AcademyTypeEnum.design,
      group: 'G3',
      grades: [6, 4, 1, 2, 6],
    },
    {
      id: 4,
      name: 'Dijana Dimitrova',
      dateOfBirth: new Date('1999-03-22'),
      academy: AcademyTypeEnum.development,
      group: 'G4',
      grades: [7, 9, 8, 6, 9],
    },
    {
      id: 5,
      name: 'Elena Stojanova',
      dateOfBirth: new Date('2001-11-17'),
      academy: AcademyTypeEnum.digitalMarketing,
      group: 'G5',
      grades: [8, 2, 9, 8, 7],
    },
    {
      id: 6,
      name: 'Filip Andreev',
      dateOfBirth: new Date('2000-08-06'),
      academy: AcademyTypeEnum.design,
      group: 'G6',
      grades: [7, 8, 1, 3, 2],
    },
    {
      id: 7,
      name: 'Gordana Stefanovska',
      dateOfBirth: new Date('2000-07-31'),
      academy: AcademyTypeEnum.devops,
      group: 'G7',
      grades: [8, 9, 10, 9, 8],
    },
    {
      id: 8,
      name: 'Hristina Nikolovska',
      dateOfBirth: new Date('1999-09-05'),
      academy: AcademyTypeEnum.qa,
      group: 'G8',
      grades: [10, 9, 8, 10, 10],
    },

    {
      id: 9,
      name: 'Igor Kostov',
      dateOfBirth: new Date('1999-12-18'),
      academy: AcademyTypeEnum.development,
      group: 'G9',
      grades: [8, 5, 9, 8, 7],
    },
    {
      id: 10,
      name: 'Jasmina Ilieva',
      dateOfBirth: new Date('1999-10-12'),
      academy: AcademyTypeEnum.digitalMarketing,
      group: 'G10',
      grades: [9, 1, 7, 9, 2],
    },
    {
      id: 11,
      name: 'Kristina Gjorgieva',
      dateOfBirth: new Date('2000-07-07'),
      academy: AcademyTypeEnum.design,
      group: 'G11',
      grades: [7, 8, 9, 7, 8],
    },
    {
      id: 12,
      name: 'Ljubica Pavlova',
      dateOfBirth: new Date('2001-04-01'),
      academy: AcademyTypeEnum.devops,
      group: 'G12',
      grades: [8, 2, 10, 3, 8],
    },
    {
      id: 13,
      name: 'Marija Todorova',
      dateOfBirth: new Date('1999-11-09'),
      academy: AcademyTypeEnum.qa,
      group: 'G1',
      grades: [10, 9, 8, 10, 7],
    },
    {
      id: 14,
      name: 'Nikola Ristov',
      dateOfBirth: new Date('2000-09-25'),
      academy: AcademyTypeEnum.development,
      group: 'G2',
      grades: [1, 8, 7, 9, 1],
    },
    {
      id: 15,
      name: 'Oliver Kolev',
      dateOfBirth: new Date('1999-05-18'),
      academy: AcademyTypeEnum.digitalMarketing,
      group: 'G3',
      grades: [8, 7, 9, 1, 7],
    },
    {
      id: 16,
      name: 'Petar Markov',
      dateOfBirth: new Date('2001-06-03'),
      academy: AcademyTypeEnum.design,
      group: 'G4',
      grades: [6, 8, 7, 9, 6],
    },
    {
      id: 17,
      name: 'Sara Pancheva',
      dateOfBirth: new Date('2000-02-17'),
      academy: AcademyTypeEnum.devops,
      group: 'G5',
      grades: [7, 3, 8, 2, 9],
    },
    {
      id: 18,
      name: 'Tamara Aleksandrova',
      dateOfBirth: new Date('1999-12-28'),
      academy: AcademyTypeEnum.qa,
      group: 'G6',
      grades: [8, 1, 2, 3, 2],
    },
    {
      id: 19,
      name: 'Viktor Trajanov',
      dateOfBirth: new Date('1999-08-09'),
      academy: AcademyTypeEnum.development,
      group: 'G7',
      grades: [7, 8, 4, 7, 2],
    },
    {
      id: 20,
      name: 'Zoran Angelov',
      dateOfBirth: new Date('2000-05-12'),
      academy: AcademyTypeEnum.digitalMarketing,
      group: 'G8',
      grades: [8, 9, 5, 9, 8],
    },
    {
      id: 21,
      name: 'Nikola Stojanovski',
      dateOfBirth: new Date('1999-07-27'),
      academy: AcademyTypeEnum.design,
      group: 'G9',
      grades: [10, 9, 8, 10, 7],
    },
    {
      id: 22,
      name: 'Angela Kuzmanovska',
      dateOfBirth: new Date('2000-04-03'),
      academy: AcademyTypeEnum.devops,
      group: 'G10',
      grades: [9, 8, 7, 2, 10],
    },
    {
      id: 23,
      name: 'Borjan Panovski',
      dateOfBirth: new Date('2001-10-29'),
      academy: AcademyTypeEnum.qa,
      group: 'G11',
      grades: [4, 7, 1, 8, 7],
    },
    {
      id: 24,
      name: 'Dijana Spirovska',
      dateOfBirth: new Date('1999-01-07'),
      academy: AcademyTypeEnum.development,
      group: 'G12',
      grades: [7, 8, 9, 3, 8],
    },
    {
      id: 25,
      name: 'Elena Stojanova',
      dateOfBirth: new Date('1999-04-15'),
      academy: AcademyTypeEnum.digitalMarketing,
      group: 'G1',
      grades: [8, 1, 2, 8, 7],
    },
    {
      id: 26,
      name: 'Klimentina Karadzovska',
      dateOfBirth: new Date('1999-05-15'),
      academy: AcademyTypeEnum.qa,
      group: 'G2',
      grades: [2, 6, 3, 10, 9],
    },
    {
      id: 27,
      name: 'Kostadin Buzlevski',
      dateOfBirth: new Date('1999-12-25'),
      academy: AcademyTypeEnum.design,
      group: 'G4',
      grades: [9, 6, 4, 10, 9],
    },
    {
      id: 28,
      name: 'Barbara Dzurkovic',
      dateOfBirth: new Date('2001-02-02'),
      academy: AcademyTypeEnum.devops,
      group: 'G6',
      grades: [2, 6, 2, 10, 3],
    },
    {
      id: 29,
      name: 'Sanja Dimkovska',
      dateOfBirth: new Date('2001-02-02'),
      academy: AcademyTypeEnum.devops,
      group: 'G6',
      grades: [2, 6, 1, 4, 3],
    },
    {
      id: 29,
      name: 'Sara Radonjic',
      dateOfBirth: new Date('1999-03-12'),
      academy: AcademyTypeEnum.development,
      group: 'G9',
      grades: [10, 9, 10, 7, 9],
    },
    {
      id: 30,
      name: 'Darko Kostic',
      dateOfBirth: new Date('2000-09-20'),
      academy: AcademyTypeEnum.digitalMarketing,
      group: 'G10',
      grades: [8, 10, 10, 7, 9],
    },
    {
      id: 31,
      name: 'Stojan Gjorgiev',
      dateOfBirth: new Date('2000-08-08'),
      academy: AcademyTypeEnum.devops,
      group: 'G11',
      grades: [6, 10, 1, 2, 3],
    },
    {
      id: 31,
      name: 'Boshko Dzaferov',
      dateOfBirth: new Date('2000-10-18'),
      academy: AcademyTypeEnum.qa,
      group: 'G12',
      grades: [6, 10, 10, 9, 3],
    },
    {
      id: 31,
      name: 'Marija Timkova',
      dateOfBirth: new Date('1999-03-04'),
      academy: AcademyTypeEnum.development,
      group: 'G1',
      grades: [2, 5, 4, 9, 3],
    },
    {
      id: 32,
      name: 'Dobrila Kirkova',
      dateOfBirth: new Date('1999-12-04'),
      academy: AcademyTypeEnum.devops,
      group: 'G3',
      grades: [10, 5, 8, 9, 8],
    },
  ];

  // Subject -- doesn't keep data
  // BehaviorSubject -- keeps last value

  private studentData: BehaviorSubject<Student[]> = new BehaviorSubject<
    Student[]
  >(this.studentsDefaultData);

  students$: Observable<Student[]> = this.studentData.asObservable();

  private updateStudentData(students: Student[]): void {
    this.studentData.next(students);
  }

  getTopThreeStudentsPerAcademy(academy: AcademyTypeEnum): Student[] {
    return [];
    // return this.students
    //   .filter((student) => student.academy === academy)
    //   .sort((a, b) => {
    //     const aAverageGrade =
    //       a.grades.reduce((acc, grade) => acc + grade, 0) / a.grades.length;
    //     const bAverageGrade =
    //       b.grades.reduce((acc, grade) => acc + grade, 0) / b.grades.length;
    //     return bAverageGrade - aAverageGrade;
    //   })
    //   .slice(0, 3);
  }

  gradeStudent(studentId: number, grade: number) {
    // const studentIndex = this.students.findIndex((s) => s.id === studentId);
    // this.students[studentIndex] = {
    //   ...this.students[studentIndex],
    //   grades: [...this.students[studentIndex].grades, grade],
    // };
  }

  searchStudents(searchFilters?: SearchFilters): Student[] {
    return [];
    // // if this method is called without parameters, we are not searching, return all students
    // if (!searchFilters) {
    //   return this.students;
    // }
    // // beginning of searching for students
    // return this.students.filter((student) => {
    //   // 1. are we searching with a search term?
    //   // 2. make sure the search term IS INCLUDED in the students name
    //   if (
    //     searchFilters.searchTerm &&
    //     !student.name
    //       .toLowerCase()
    //       .includes(searchFilters.searchTerm.toLowerCase())
    //   ) {
    //     // if it's not included, there is no reason to continue checking with other filters, don't return this student
    //     return false;
    //   }
    //   // 1. are we filtering out only students that are passing?
    //   // 2. make sure the search term IS HIGHER or EQUAL to 5
    //   if (
    //     searchFilters.isPassing &&
    //     student.grades.reduce((a, b) => a + b, 0) / student.grades.length < 5
    //   ) {
    //     // if it's less than 5, there is no reason to continue checking with other filters, don't return this student
    //     return false;
    //   }
    //   // 1. are we filtering out students by a group?
    //   // 2. make sure the student IS IN this group
    //   if (searchFilters.group && student.group !== searchFilters.group) {
    //     // if the student is not in this group, there is no reason to continue checking with other filters, don't return this student
    //     return false;
    //   }
    //   // 1. are we filtering out students by date of birth?
    //   // 2. make sure the student IS OLDER THAN the start date
    //   if (
    //     searchFilters.startDate &&
    //     student.dateOfBirth < searchFilters.startDate
    //   ) {
    //     // if it's not older than the start date, there is no reason to continue checking with other filters, don't return this student
    //     return false;
    //   }
    //   // 1. are we filtering out students by date of birth?
    //   // 2. make sure the student IS YOUNGER THAN the end date
    //   if (
    //     searchFilters.endDate &&
    //     student.dateOfBirth > searchFilters.endDate
    //   ) {
    //     // if it's not younger than the end date, there is no reason to continue checking with other filters, don't return this student
    //     return false;
    //   }
    //   // if the student meets all criteria (hasn't failed any check above) it will be returned
    //   return true;
    // });
  }

  addStudent(student: Student) {
    // this.students.push(student);
  }

  updateStudent(student: Student) {
    // const index = this.students.findIndex((s) => s.id === student.id);
    // this.students[index] = {
    //   ...this.students[index],
    //   ...student,
    // };
  }

  deleteStudent(studentId: number) {
    // this.students = this.students.filter((s) => s.id !== studentId);
  }
}

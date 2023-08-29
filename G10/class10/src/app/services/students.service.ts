import { SearchFilters } from './../interfaces/search-filters.interface';
import { Injectable } from '@angular/core';
import { AcademyTypeEnum } from '../interfaces/academy-type.enum';
import { Student } from '../interfaces/student.interface';
import { BehaviorSubject, Observable, filter, from, map } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root', // determines the scope of the service. This is deprecated, in future versions, this will be the default behavior
})
export class StudentsService {
  students$: Observable<Student[]> = new Observable<Student[]>();

  constructor(private firestore: AngularFirestore) {
    this.students$ = this.firestore
      .collection<Student>('students')
      .valueChanges({
        idField: 'id',
      });
  }

  getTopThreeStudentsPerAcademy(
    academy: AcademyTypeEnum
  ): Observable<Student[]> {
    return this.students$.pipe(
      map((students) =>
        students
          .filter((student) => student.academy === academy)
          .sort((a, b) => {
            const aAverageGrade =
              a.grades.reduce((acc, grade) => acc + grade, 0) / a.grades.length;
            const bAverageGrade =
              b.grades.reduce((acc, grade) => acc + grade, 0) / b.grades.length;
            return bAverageGrade - aAverageGrade;
          })
          .slice(0, 3)
      )
    );
  }

  gradeStudent(studentId: string, grade: number) {
    // // 1. get all students as an array
    // const students = this.studentData.getValue();
    // // 2. find the student
    // const studentIndex = students.findIndex((s) => s.id === studentId);
    // // 3. update the student in the array
    // students[studentIndex] = {
    //   ...students[studentIndex],
    //   grades: [...students[studentIndex].grades, grade],
    // };
    // // 4. Update the Behavior Subject
    // this.updateStudentData(students);
  }

  searchStudents(searchFilters?: SearchFilters): Observable<Student[]> {
    // if this method is called without parameters, we are not searching, return all students
    if (!searchFilters) {
      return this.students$;
    }

    return this.students$.pipe(
      map((students) => {
        return students.filter((student) => {
          if (
            searchFilters.searchTerm &&
            !student.name
              .toLowerCase()
              .includes(searchFilters.searchTerm.toLowerCase())
          ) {
            return false;
          }

          if (
            searchFilters.isPassing &&
            student.grades.reduce((a, b) => a + b, 0) / student.grades.length <
              5
          ) {
            return false;
          }

          if (searchFilters.group && student.group !== searchFilters.group) {
            return false;
          }

          if (
            searchFilters.startDate &&
            student.dateOfBirth < searchFilters.startDate
          ) {
            return false;
          }

          if (
            searchFilters.endDate &&
            student.dateOfBirth > searchFilters.endDate
          ) {
            return false;
          }

          return true;
        });
      })
    );
  }

  addStudent(student: Student): Observable<Student | unknown> {
    const newStudent = {
      ...student,
      dateOfBirth: student.dateOfBirth.toISOString(),
    };

    return from(this.firestore.collection('students').add(newStudent));
  }

  updateStudent(student: Student) {
    // const students = this.studentData.getValue();
    // const index = students.findIndex((s) => s.id === student.id);
    // students[index] = {
    //   ...students[index],
    //   ...student,
    // };
    // this.updateStudentData(students);
  }

  deleteStudent(studentId: string): Observable<void> {
    return from(this.firestore.collection('students').doc(studentId).delete());
  }
}

import { SearchFilters } from './../interfaces/search-filters.interface';
import { Injectable } from '@angular/core';
import { AcademyTypeEnum } from '../interfaces/academy-type.enum';
import { Student } from '../interfaces/student.interface';
import { Observable, from, map, mergeMap, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private firestore: AngularFirestore) {}

  getTopThreeStudentsPerAcademy(
    academy: AcademyTypeEnum
  ): Observable<Student[]> {
    return this.firestore
      .collection<Student>('students', (ref) =>
        ref.where('academy', '==', academy).orderBy('grades', 'desc').limit(3)
      )
      .valueChanges({
        idField: 'id',
      });
  }

  gradeStudent(studentId: string, grade: number): Observable<void | null> {
    return this.firestore
      .collection('students')
      .doc(studentId)
      .get()
      .pipe(
        mergeMap((student) => {
          if (!student.exists) {
            return of(null);
          }

          const { grades } = student.data() as Student;
          grades.push(grade);

          return from(
            this.firestore
              .collection('students')
              .doc(studentId)
              .update({ grades })
          );
        })
      );
  }

  searchStudents(searchFilters: SearchFilters): Observable<Student[]> {
    return this.firestore
      .collection<Student>('students', (ref) =>
        ref.orderBy(searchFilters.sortBy, searchFilters.sortDirection)
      )
      .valueChanges({
        idField: 'id',
      })
      .pipe(
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
              student.grades.reduce((a, b) => a + b, 0) /
                student.grades.length <
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

  updateStudent(student: Student): Observable<void> {
    const updateStudent = {
      ...student,
      dateOfBirth: student.dateOfBirth.toISOString(),
    };

    return from(
      this.firestore
        .collection('students')
        .doc(student.id)
        .update(updateStudent)
    );
  }

  deleteStudent(studentId: string): Observable<void> {
    // throw new Error('Something went wrong');
    return from(this.firestore.collection('students').doc(studentId).delete());
  }
}

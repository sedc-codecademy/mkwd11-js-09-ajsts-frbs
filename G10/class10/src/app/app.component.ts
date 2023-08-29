import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    // this.firestore
    //   .collection('students')
    //   .valueChanges()
    //   .subscribe((students) => console.log('firebase', students));
    // this.firestore.collection('students').add({
    //   name: 'John Doe',
    //   dateOfBirth: new Date().toISOString(),
    //   academy: 'Development',
    //   group: 'G10',
    //   grades: [1, 2, 3, 10],
    //   location: 'Greece',
    // });
  }
}

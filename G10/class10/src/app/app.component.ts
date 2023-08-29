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
    this.firestore
      .collection('pets')
      .valueChanges()
      .subscribe((students) => console.log('firebase', students));
  }
}

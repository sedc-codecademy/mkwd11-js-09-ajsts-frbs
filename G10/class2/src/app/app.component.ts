import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<h1>Directly from the component</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title = 'class1';

  onInputChange(event: any) {
    console.log('input changed', event.target.value);

    this.title = event.target.value;
  }
}

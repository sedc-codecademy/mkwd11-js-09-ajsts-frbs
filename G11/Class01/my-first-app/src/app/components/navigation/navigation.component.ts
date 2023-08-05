import { Component } from "@angular/core"

@Component({
    selector: `app-navigation`,
    // template: `<h3>This text comes from navigation component</h3>`,
    templateUrl: './navigation.component.html',
    // styles: [`h3 {
    //     background-color: blue;
    // }`]
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

    constructor () {
        console.log('From navigation component');
    }
}
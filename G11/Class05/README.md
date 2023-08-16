## Angular Routing

**Angular Router** is a powerful JavaScript router built and maintained by the Angular core team that can be installed from the @angular/router package. 
It provides a complete routing library with the possibility to have multiple router outlets, different path matching strategies, easy access to route parameters and route guards to protect components from unauthorized access.

In a single-page app, you change what the user sees by showing or hiding portions of the display that correspond to particular components, rather than going out to the server to get a new page. As users perform application tasks, they need to move between the different views that you have defined.

To handle the navigation from one view to the next, you use the Angular Router. The Router enables navigation by interpreting a browser URL as an instruction to change the view.

The Angular router is a core part of the Angular platform. It enables developers to build Single Page Applications with multiple views and allow navigation between these views.

In Angular, the best practice is to load and configure the router in a separate, top-level module. The router is dedicated to routing and imported by the root AppModule.

By convention, the module class name is AppRoutingModule and it belongs in the app-routing.module.ts in the src/app directory.

Run ` ng generate module app-routing --flat --module=app ` to create the application routing module.
--flat - Puts the file in src/app instead of its own directory.
--module=app - Tells ng generate to register it in the imports array of the AppModule.

### Route and paths
Route tells the Angular Router which view to display when a user clicks a link or pastes a URL into the browser address bar. Every Route consists of a path and a component it is mapped to. The Router object parses and builds the final URL using the Route.
The path refers to the part of the URL that determines a unique view that should be displayed, and component refers to the Angular component that needs to be associated with a path. Based on a route definition that we provide (via a static RouterModule.forRoot(routes) method), the Router is able to navigate the user to a specific view.

Each Route maps a URL path to a component.

The path can be empty which denotes the default path of an application and it’s usually the start of the application.

The path can take a wildcard string (**). The router will select this route if the requested URL doesn’t match any paths for the defined routes. This can be used for displaying a “Not Found” view or redirecting to a specific view if no match is found.

This is an example of a route:

` { path:  'contacts', component:  ContactListComponent} `
If this route definition is provided to the Router configuration, the router will render ContactListComponent when the browser URL for the web application becomes /contacts.

### Routes
Routes is an array of Route objects our application supports

### The router-outlet
The outerOutlet is a directive (`<router-outlet>`) that serves as a placeholder, where the Router should display the view (insert a component) that gets matched based on the current browser’s URL.
You can add multiple outlets in your Angular application which enables you to implement advanced routing scenarios.
` <router-outlet></router-outlet> `


### RouterLink
The RouterLink is a directive that binds the HTML element to a Route. Clicking on the HTML element, which is bound to a RouterLink, will result in navigation to the Route. The RouterLink may contain parameters to be passed to the route’s component.
` <a [routerLink]="'/contacts'">Contacts</a> `

### RouterLinkActive
RouterLinkActive is a directive for adding or removing classes from an HTML element that is bound to a RouterLink. Using this directive, we can toggle CSS classes for active RouterLinks based on the current RouterState.

### ActivatedRoute
The ActivatedRoute is an object that represents the currently activated route associated with the loaded Component.

### RouterState
The current state of the router includes a tree of the currently activated routes together with convenience methods for traversing the route tree.

### Route params
It is an array that you can bind to RouterLink directive or pass it as an argument to the Router.navigate method.
Creating routes with parameters is a common feature in web apps. Angular Router allows you to access parameters in different ways:

You can create a route parameter using the colon syntax. This is an example route with an id parameter:
` { path:  'contacts/:id', component:  ContactDetailComponent} `

[Angular Routing Documentation](https://angular.io/api/router)
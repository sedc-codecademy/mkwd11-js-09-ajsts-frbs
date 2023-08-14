# Angular Services Basics

This README.md file provides an introduction to the basic concepts of services in Angular.

## Table of Contents

- [Introduction](#introduction)
- [What are Services?](#what-are-services)
- [Why Use Services?](#why-use-services)
- [Creating a Service](#creating-a-service)
- [Injecting a Service](#injecting-a-service)
- [Using a Service](#using-a-service)
- [Singleton Pattern](#singleton-pattern)
- [Summary](#summary)
- [Resources](#resources)

## Introduction

Angular is a powerful JavaScript framework used for building dynamic web applications. One of the core concepts in Angular is the use of services to manage and share data, functionality, or logic across different components.

## What are Services?

Services in Angular are classes that are used to encapsulate and provide reusable functionality, data, or logic to different parts of an application. They act as a means of communication and coordination between components, allowing for the separation of concerns and promoting a modular architecture.

## Why Use Services?

Services offer several benefits in an Angular application:

- **Reusability:** Services allow you to write code once and use it across multiple components.
- **Separation of Concerns:** Services help separate business logic and data management from the UI components.
- **Singleton Pattern:** Services are typically instantiated as singletons, ensuring a single instance is shared across the application.
- **Dependency Injection:** Services can be injected into components, making it easier to manage component dependencies.
- **Testing:** Services can be easily tested in isolation, improving the overall testability of the application.

## Creating a Service

To create a service in Angular, you can use the Angular CLI or create a new TypeScript file manually. Here's an example of how to create a basic service using the Angular CLI:

```bash
ng generate service my-service
```

This will generate a `my-service.service.ts` file that you can edit to implement your service logic.

## Creating a Service with @Injectable Decorator

Assuming you have generated a service named `my-service` using the Angular CLI, here's how the service file (`my-service.service.ts`) might look with the `@Injectable` decorator:

```typescript
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root", // This makes the service available at the root level
})
export class MyService {
  constructor() {}

  doSomething() {
    // Service logic here
    console.log("Service method executed.");
  }
}
```

## Including the Service in an Angular Module

To use the service in your application, you need to include it in an Angular module. Here's how you can include the `MyService` in an example module (`app.module.ts`):

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MyService } from "./my-service.service"; // Import the service

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [MyService], // Include the service in the providers array
  bootstrap: [AppComponent],
})
export class AppModule {}
```

By including the service in the `providers` array of your module, you make the service available throughout your application. The `providedIn: 'root'` option in the `@Injectable` decorator makes the service a singleton and automatically provides it at the root level.

Remember to import the service at the top of your module file and add it to the `providers` array as shown above.

## Additional Notes

- The `@Injectable` decorator is not strictly required for a service to work, but it's a best practice to include it. It enables optimizations in Angular's dependency injection system.

- When you use `providedIn: 'root'`, you don't need to include the service in the `providers` array of the module. Angular will automatically provide it at the root level.

- If you want to provide the service at a different level (e.g., within a specific component or lazy-loaded module), you can remove the `providedIn` option from the `@Injectable` decorator and include the service in the `providers` array of the respective module or component.

This completes the example of creating a service with the `@Injectable` decorator and including it in an Angular module. You can now use the `MyService` methods and functionality in your components throughout your Angular application.

## Injecting a Service

Services need to be injected into the components or other services that require their functionality. Angular's dependency injection system handles this automatically. To inject a service into a component, you need to specify the service as a constructor parameter:

```typescript
import { Component } from "@angular/core";
import { MyService } from "./my-service.service";

@Component({
  selector: "app-my-component",
  template: "...",
})
export class MyComponent {
  constructor(private myService: MyService) {}
}
```

## Using a Service

Once a service is injected into a component, you can use its methods and properties. For example:

```typescript
import { Component } from "@angular/core";
import { MyService } from "./my-service.service";

@Component({
  selector: "app-my-component",
  template: ` <button (click)="callServiceMethod()">Call Service</button> `,
})
export class MyComponent {
  constructor(private myService: MyService) {}

  callServiceMethod() {
    this.myService.doSomething();
  }
}
```

## Singleton Pattern

Angular services are typically created as singletons. This means that there is only one instance of the service throughout the application. When a service is injected into multiple components, they all share the same instance.

## Summary

Services are a fundamental concept in Angular that allow you to encapsulate and share functionality, data, or logic between components. They promote reusability, separation of concerns, and efficient communication within an Angular application.

## Resources

- [Angular Services Documentation](https://angular.io/guide/architecture-services)
- [Dependency Injection in Angular](https://angular.io/guide/dependency-injection)
- [Angular CLI Documentation](https://angular.io/cli)

Feel free to explore these resources for a deeper understanding of Angular services and their usage.

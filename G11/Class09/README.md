# Optimizing Angular applications by using feature modules and lazy loading

## Feature modules 

## Why code splitting matters
The ever growing complexity of web applications has led to a significant increase in the amount of JavaScript shipped to users. Large JavaScript files can noticeably delay interactivity, so it can be a costly resource, especially on mobile.

The most efficient way to shrink JavaScript bundles without sacrificing features in your applications is to introduce aggressive code splitting.

Code splitting lets you divide the JavaScript of your application into multiple chunks associated with different routes or features. This approach only sends users the JavaScript they need during the initial application load, keeping load times low.

Feature modules are NgModules for the purpose of organizing code.

As your application grows, you can organize code relevant for a specific feature. This helps apply clear boundaries for features. 
With feature modules, you can keep code related to a specific functionality or feature separate from other code. 
Delineating areas of your application helps with collaboration between developers and teams, separating directives, and managing the size of the root module.

### Core modules vs. feature modules vs shared modules

**Core Module**
The Core Module in a project using Angular plays a crucial role in providing essential services, components, and configurations that are used throughout the application. It serves as a central module for core functionality that is shared across multiple feature modules. The Core Module is typically responsible for handling authentication, API services, error handling, logging, and other common functionalities required by the application.

When creating the Core Module, it is important to include services that are singletons and need to be shared across the application. This includes services like authentication service, data service, and logging service. Additionally, components that are used globally, such as header, footer, or navigation components, can also be included in the Core Module.

**Feature Modules**
Feature Modules are a way to organize related components, services, and other code within an Angular application. They encapsulate a specific feature or functionality and provide a modular structure to the application. Feature Modules allow for better separation of concerns and code reusability.

By creating feature modules you can group together all the components and other related files that are required for a specific feature. This makes managing and maintaining the codebase easier as each feature module focuses on a specific part of the application. It also enables better collaboration among developers working on different features. Feature Modules can be independently developed and shared across multiple projects.

**Shared Module**
A shared module in Angular is a module that contains components, directives, and pipes that are shared across multiple feature modules. It allows for the centralization and reusability of common UI components, services, and other code throughout the application. By creating a shared module, you can avoid code duplication and promote consistency in the project.

A shared module typically includes components, directives, and pipes that are commonly used across multiple feature modules. Examples of shared components may include buttons, input fields, modals, and tooltips. Services that are shared across different modules, such as logging services or utility services can also be included in the shared module.


### Creating a feature module
Assuming that we have an existing angular application, a feature module can be created by running the following command 
` ng generate module NewFeature ` 

This causes the CLI to create a folder called new-feature with a file inside called new-feature.module.ts with the following contents:

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class NewFeatureModule { }
```

The structure of an NgModule is the same whether it is a root module or a feature module. 
In the CLI generated feature module, there are two JavaScript import statements at the top of the file: 
the first imports NgModule, which, like the root module, lets you use the @NgModule decorator; 
the second imports CommonModule, which contributes many common directives such as ngIf and ngFor. 
Feature modules import CommonModule instead of BrowserModule, which is only imported once in the root module. CommonModule only contains information for common directives such as ngIf and ngFor which are needed in most templates, whereas BrowserModule configures the Angular application for the browser which needs to be done only once.

The declarations array is available for you to add declarables, which are components, directives, and pipes that belong exclusively to this particular module. To add a component, enter the standard command for creating a component but make sure that you are running the command inside the feature module level.

### Importing a feature module
To incorporate the feature module into your app, you have to let the root module, app.module.ts, know about it. Notice the CustomerDashboardModule export at the bottom of customer-dashboard.module.ts. This exposes it so that other modules can get to it. To import it into the AppModule, add it to the imports in app.module.ts and to the imports array.

![Modules](https://www.codeproject.com/KB/scripting/1248953/image001.png "Modules")
![Modules](https://bulldogjob.com/ckeditor_assets/pictures/184/content_2.png "Modules")

## Lazy-loading feature modules

By default, NgModules are eagerly loaded. This means that as soon as the application loads, so do all the NgModules, whether they are immediately necessary or not. For large applications with lots of routes, consider lazy loading a design pattern that loads NgModules as needed. Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.

To lazy load Angular modules, use loadChildren (instead of component) in your AppRoutingModule routes configuration as follows.

To lazy load Angular modules, use loadChildren (instead of component) in your AppRoutingModule routes configuration as follows.

```const routes: Routes = [
  {
    path: 'items',
    loadChildren: () => import('./newFeature/newFeature.module').then(m => m.NewFeatureModule)
  }
];
```
In the lazy-loaded module's routing module, add a route for the component.

```
const routes: Routes = [
  {
    path: '',
    component: ItemsComponent
  }
];
```
Also be sure to remove the NewFeatureModule from the AppModule. 

### forRoot() and forChild()


The Angular CLI also adds RouterModule.forChild(routes) to feature routing modules. This way, Angular knows that the route list is only responsible for providing extra routes and is intended for feature modules. You can use forChild() in multiple modules.

The forRoot() method takes care of the global injector configuration for the Router. The forChild() method has no injector configuration. It uses directives such as RouterOutlet and RouterLink.
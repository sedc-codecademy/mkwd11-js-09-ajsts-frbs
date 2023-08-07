# Directives

  

## What are directives?

  

Directives are classes that add additional behavior to elements in your Angular applications. Use Angular's built-in directives to manage forms, lists, styles, and what users see.

  

## Built-in attribute directives

Attribute directives listen to and modify the behavior of other HTML elements, attributes, properties, and components.

  

## Attribute directives

Change the appearance or behavior of DOM elements and Angular components with attribute directives.

  

## Structural directives

Structural directives are directives which change the DOM layout by adding and removing DOM elements.

Angular provides a set of built-in structural directives (such as NgIf, NgForOf, NgSwitch and others) which are commonly used in all Angular projects.

  
  

# Lifecycle Hooks

  

## Component Lifecycle

A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views.

The lifecycle continues with change detection, as Angular checks to see when data-bound properties change, and updates both the view and the component instance as needed.

The lifecycle ends when Angular destroys the component instance and removes its rendered template from the DOM.

Directives have a similar lifecycle, as Angular creates, updates, and destroys instances in the course of execution.

  

Your application can use lifecycle hook methods to tap into key events in the lifecycle of a component or directive to initialize new instances, initiate change detection when needed, respond to updates during change detection, and clean up before deletion of instances.

  
  

## Types of lifecycle hooks

ngOnChanges()

- Respond when Angular sets or resets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.

- Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change.

  

ngOnInit()

- Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties.

- Called once, after the first ngOnChanges(). ngOnInit() is still called even when ngOnChanges() is not (which is the case when there are no template-bound inputs).

  

ngDoCheck()

- Detect and act upon changes that Angular can't or won't detect on its own.

- Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.

  

ngAfterContentInit()

- Respond after Angular projects external content into the component's view, or into the view that a directive is in.

- Called once after the first ngDoCheck().

  

ngAfterContentChecked()

- Respond after Angular checks the content projected into the directive or component.

- Called after ngAfterContentInit() and every subsequent ngDoCheck().

  

ngAfterViewInit()

- Respond after Angular initializes the component's views and child views, or the view that contains the directive.

- Called once after the first ngAfterContentChecked().

  

ngAfterViewChecked()

- Respond after Angular checks the component's views and child views, or the view that contains the directive.

- Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().

  

ngOnDestroy()

- Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks.

- Called immediately before Angular destroys the directive or component.

![Lifecycle Hooks](https://dotnettrickscloud.blob.core.windows.net/img/angular/angular-lifecycle-hooks.png "Lifecycle Hooks")
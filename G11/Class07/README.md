## Handling Forms in Angular
Handling user input with forms is the cornerstone of many common applications. Applications use forms to enable users to log in, to update a profile, to enter sensitive information, and to perform many other data-entry tasks.
Angular provides two different approaches to handling user input through forms: reactive and template-driven. Both capture user input events from the view, validate the user input, create a form model and data model to update, and provide a way to track changes.

### Template-Driven Forms
A template-driven form is the simplest way to build a form in Angular. It uses Angular's two-way data-binding directive (ngModel) to create and manage the underlying form instance and to update the data model in the component as changes are made in the template and vice versa.. Additionally, as the name suggests, a template form is mainly driven by the view component.

### Reactive Forms
Reactive forms use an explicit and immutable approach to managing the state of a form at a given point in time. Each change to the form state returns a new state, which maintains the integrity of the model between changes. 
Reactive forms are built around observable streams, where form inputs and values are provided as streams of input values, which can be accessed synchronously.

### Reactive VS Template-Driven Forms
Reactive forms differ from template-driven forms in distinct ways. Reactive forms provide synchronous access to the data model, immutability with observable operators, and change tracking through observable streams.
Template-driven forms let direct access modify data in your template, but are less explicit than reactive forms because they rely on directives embedded in the template, along with mutable data to track changes asynchronously. See the Forms Overview for detailed comparisons between the two paradigms.

Overall, template-driven forms are easier to use and require less code to create, but they offer less flexibility and control than reactive forms. 
Reactive forms are more powerful and offer greater control over form behavior, but they require more code and are more complex to set up and use.

![Forms](https://www.codemotion.com/magazine/wp-content/uploads/2019/12/MY-IMAGE_2_d214d464f84433ceba6eff2534deb36c_800.png "Forms")

Reactive and Template-Driven under the hood are implemented in the same way: there is a FormGroup for the whole form, and one FormControl instance per each individual control.

The difference is that, with Reactive Forms we are defining the form model programmatically in an explicit way in our component class, and we then link the form model to the template using directives such as
formGroup or formControlName.

This is as opposed to template driven forms, where the same form model made of a FormGroup and FormControl instances is built behind the scenes for us by a series of directives applied to the template, like ngForm and ngModel.

### Validating input in template-driven forms
To add validation to a template-driven form, you add the same validation attributes as you would with native HTML form validation. 
Angular uses directives to match these attributes with validator functions in the framework.

Every time the value of a form control changes, Angular runs validation and generates either a list of validation errors that results in an INVALID status, or null, which results in a VALID status.

You can then inspect the control's state by exporting ngModel to a local template variable.

### Validating input in reactive forms
In a reactive form, the source of truth is the component class. Instead of adding validators through attributes in the template, you add validator functions directly to the form control model in the component class. Angular then calls these functions whenever the value of the control changes.

#### Built-in validator functions
You can choose to write your own validator functions, or you can use some of Angular's built-in validators.
[Validators documentation](https://blog.angular-university.io/angular-custom-validators/)

The same built-in validators that are available as attributes in template-driven forms, such as required and minlength, are all available to use as functions from the Validators class. For a full list of built-in validators, see the Validators API reference.

#### Custom validators
The built-in validators don't always match the exact use case of your application, so you sometimes need to create a custom validator.


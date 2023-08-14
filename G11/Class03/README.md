## What is a pipe?

Pipes are simple functions to use in template expressions to accept an input value and return a transformed value. Pipes are useful because you can use them throughout your application, while only declaring each pipe once. For example, you would use a pipe to show a date as April 15, 1988 rather than the raw string format.

![Pipes](https://www.simplilearn.com/ice9/free_resources_article_thumb/Angular_Pipes.PNG "Pipes")
 

## Built-in pipes
Angular provides built-in pipes for typical data transformations, including transformations for internationalization (i18n), which use locale information to format data. The following are commonly used built-in pipes for data formatting:

- DatePipe: Formats a date value according to locale rules.

- UpperCasePipe: Transforms text to all upper case.

- LowerCasePipe: Transforms text to all lower case.

- CurrencyPipe: Transforms a number to a currency string, formatted according to locale rules.

- DecimalPipe: Transforms a number into a string with a decimal point, formatted according to locale rules.

- PercentPipe: Transforms a number to a percentage string, formatted according to locale rules.
  

## Creating pipes for custom data transformations
You can create custom pipes to encapsulate transformations that are not provided with the built-in pipes. Then, use your custom pipe in template expressions, the same way you use built-in pipes —to transform input values to output values for display.
 

### Marking a class as a pipe
To mark a class as a pipe and supply configuration metadata, apply the @Pipe decorator to the class. Use UpperCamelCase (the general convention for class names) for the pipe class name, and camelCase for the corresponding name string. Do not use hyphens in the name. For details and more examples, see Pipe names.


### Using the PipeTransform interface
Implement the PipeTransform interface in your custom pipe class to perform the transformation.
 
Angular invokes the transform method with the value of a binding as the first argument, and any parameters as the second argument in list form, and returns the transformed value.
  

## Transforming data with parameters and chained pipes
Use optional parameters to fine-tune a pipe's output. For example, use the CurrencyPipe with a country code such as EUR as a parameter. The template expression {{ amount | currency:'EUR' }} transforms the amount to currency in euros. Follow the pipe name (currency) with a colon (:) character and the parameter value ('EUR').

If the pipe accepts multiple parameters, separate the values with colons. For example, {{ amount | currency:'EUR':'Euros '}} adds the second parameter, the string literal 'Euros ', to the output string. Use any valid template expression as a parameter, such as a string literal or a component property. 

Some pipes require at least one parameter and allow more optional parameters, such as SlicePipe. For example, {{ slice:1:5 }} creates a new array or string containing a subset of the elements starting with element 1 and ending with element 5.

  
## Pipes and precedence
The pipe operator has a higher precedence than the ternary operator (?:), which means a ? b : c | x is parsed as a ? b : (c | x). The pipe operator cannot be used without parentheses in the first and second operands of ?:.

Due to precedence, if you want a pipe to apply to the result of a ternary, wrap the entire expression in parentheses; for example, (a ? b : c) | x. lower case.
CurrencyPipe: Transforms a number to a currency string, formatted according to locale rules.
DecimalPipe: Transforms a number into a string with a decimal point, formatted according to locale rules.
PercentPipe: Transforms a number to a percentage string, formatted according to locale rules.

Create pipes to encapsulate custom transformations and use your custom pipes in template expressions.


## Creating pipes for custom data transformations
Create custom pipes to encapsulate transformations that are not provided with the built-in pipes. Then, use your custom pipe in template expressions, the same way you use built-in pipes —to transform input values to output values for display.


### Marking a class as a pipe
To mark a class as a pipe and supply configuration metadata, apply the @Pipe decorator to the class. Use UpperCamelCase (the general convention for class names) for the pipe class name, and camelCase for the corresponding name string. Do not use hyphens in the name. For details and more examples, see Pipe names.


### Using the PipeTransform interface
Implement the PipeTransform interface in your custom pipe class to perform the transformation.

Angular invokes the transform method with the value of a binding as the first argument, and any parameters as the second argument in list form, and returns the transformed value.


## Transforming data with parameters and chained pipes
Use optional parameters to fine-tune a pipe's output. For example, use the CurrencyPipe with a country code such as EUR as a parameter. The template expression {{ amount | currency:'EUR' }} transforms the amount to currency in euros. Follow the pipe name (currency) with a colon (:) character and the parameter value ('EUR').

If the pipe accepts multiple parameters, separate the values with colons. For example, {{ amount | currency:'EUR':'Euros '}} adds the second parameter, the string literal 'Euros ', to the output string. Use any valid template expression as a parameter, such as a string literal or a component property.

Some pipes require at least one parameter and allow more optional parameters, such as SlicePipe. For example, {{ slice:1:5 }} creates a new array or string containing a subset of the elements starting with element 1 and ending with element 5.


## Pipes and precedence
The pipe operator has a higher precedence than the ternary operator (?:), which means a ? b : c | x is parsed as a ? b : (c | x). The pipe operator cannot be used without parentheses in the first and second operands of ?:.

Due to precedence, if you want a pipe to apply to the result of a ternary, wrap the entire expression in parentheses; for example, (a ? b : c) | x.
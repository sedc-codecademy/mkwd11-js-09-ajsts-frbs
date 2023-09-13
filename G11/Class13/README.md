# Angular Material

## What is Angular Material
Angular Material is a User Interface (UI) component library that developers can use in their Angular projects to speed up the development of elegant and consistent user interfaces. 
Angular Material offers you reusable and beautiful UI components like Cards, Inputs, Data Tables, Datepickers, and much more.

Each component is ready to go with default styling that follows the Material Design Specification. Nonetheless, you can easily customize the look and feel of Angular Material components. The list of available Angular Material components continues to grow with each iteration of the library.


## Installing Angular Material
To install Angular Material as a dependency of your project, run the following command:

` npm install @angular/material `

## Angular Material Themes
After running the instalation you will be prompted to choose a theme that defines what colors will be used in your Angular Material components. You can choose one of the built-in themes but this is not mandatory. If you do not choose a theme during the installation, you can configure a theme in your src/styles.css file.

For example you can import the indigo-pink theme by pasting the following line:
`@import "~@angular/material/prebuilt-themes/indigo-pink.css";`

## Importing Material Components
You can import each material component directly into your module, or, as a better practice, you can create a new file called material.module.ts in the ./src/app where you will import all the material components and then import that module into a specific module of your application where you want to use Angular Material.

## DOcumentation
Official Angular Material documentation provides an excellent explanation of all the features alog with examples. 
[Angular Material reference](https://material.angular.io/)
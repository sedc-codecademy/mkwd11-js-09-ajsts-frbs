# Rent a Car App

## Requirements

### The general objective is to create an app that displays a list of available cars for rent. Each car's information is presented within a card, and each card includes a "Rent" button.

- In the main AppComponent, create two properties containing welcoming messages of your choice, and display these messages in the HTML template.

- Define an Car interface containing the following properties:

  - id: number
  - model: string
  - engineType: string
  - yearOfProduction: string
  - priceToRent: number
  - image: string (URL of an image from the web)
  - isRented: boolean

- Within the AppComponent, create a hard-coded array of car objects with at least three cars.

- Create a child component called CarsListComponent. Render this component within the AppComponent and provide the array of cars as input to the child component.

- In the CarsListComponent, list all the cars using individual cards (you can apply styling of your choice).

- Display a green "Available" label for cars that are not rented. For rented cars, do not show "Available" label.

- For cars that are not rented, display a "Rent" button. When clicked, this button should set the isRented property of the car to true.

- For rented cars, display a "Return the Car / Abort Renting" button. When clicked, this button should set the isRented property of the car to false.

- Create an additional component called FilterOptionsComponent.

- Render the FilterOptionsComponent at the top of the CarsListComponent.

- The FilterOptionsComponent should include three buttons: "Show Rented," "Show Available," and "Reset."

- Clicking the "Show Rented" button should display only the cars that are currently rented.

- Clicking the "Show Available" button should display only the cars that are available for rent.

- Clicking the "Reset" button should reset the filter and display all cars.

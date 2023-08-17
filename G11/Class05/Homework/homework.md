## Order App

Create a new anular aplication - Order App. 

The application should contain a navigation bar that will enable the user to navigate between different parts of the application.
The navigation should contain the following links:
 - Home
 - Products 
 - My Orders
 - About 
 
 In the home page, display a welcome message for the user.
 In the about page display a general info about the application: what is it for and who is the creator.
 In the Products page display a list of all products. The best way is to display the products like product cards.
 - Each product card will have a "Order" button that will create an order once clicked. If the "Order" button is clicked, a stock should be reduced accordingly.
 - If the stock property is 0, disable the "Order" button so that the user won't be able to click it.
 In the My Orders page, display a list (Name and Price) for all orders that have been ordered by the user.

 **Use Angular Routing to handle navigation between different views.**

 The model will be a single product with the following properties:
 - id: number
 - name: string
 - description: string 
 - price: number
 - categigy: string (should be one of the following categories: "Electronics", "Clothing", "Books", "Sports")
 - stock (number of items in stock): number
 
 If you don't have an idea about the mock-data, we have provided data that you can use in the `prodicts-data.ts` file.
 
 Feel free to experiment and add additional features and styling (but only after completing the MAIN requirements! :) 
 
## Upgrade the order app

The homework should be an addition to the previous homework, thus you shouldn't create a new application but work on the one from the previous homework. 
Create a new component named add-product
The add product should contain a reactive form with the following input fields:

**name**
**description**
**price**
**category**
**stock**

- The id should be populated automatically based on id of the latest product added in the db (orders array).
Let's say the id of the latest product is 20, so the next product should automatically get 21 as an id.
- All of the fields should be inputs of the relevant type (text, number, textarea etc.)
- The types of the fields should match the data types of the Product interface
- All of the fields are required and should be populated by the user before submitting the product
- Make sure that the user won't be able to submit the form until it contains all the necessary data
- Make sure that the description is no longer than 100 characters
- Make sure that the user will enter ONLY a category that is supported (Books, Clothing, Sports and Electronics)

First complete the main requirements, then play with the design if you have time :) 
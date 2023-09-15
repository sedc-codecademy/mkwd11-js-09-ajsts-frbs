# Class14 - NgRx Workshop

## Requirements

- The goal of this workship is to practice building an angular application that is going to use ngRx as it's state-management solution

- The topic of the website in question is a store app that will use "https://fakestoreapi.com" as it's api

- Use ngRx and ngRx effects to work with the api and connect the following endpoints with the app

1. Get all products

2. Get products by id

3. Create product

4. Update product

5. Delete product

**Important: This api doesn't actually modify the database when you are calling the create, update, delete methods rather in sends back a response that you can use to update the ui, for example if you POST a new product the api will return a new object which you use ngRx to add to the list of products at the end**

- Views that need to be built in the angular client are:

  1. Product list page
  2. Add product page
  3. Update product page

- It's up to the student how he displays the products (ex: cards or list) but what the product list needs is a button to delete a product which will send the DELETE endpoint mentioned above

### Tips

- Focus first on building the entire ui using mock data if you need to, work on using sync ngRx to get everything working before moving into effects and connecting the async logic

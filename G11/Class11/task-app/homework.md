# Angular Application Homework: Utilizing the SWAPI API

## Task Description

Build a concise and straightforward Angular application that interacts with the SWAPI API (Star Wars API). Your application should fetch and display information about people from the URL: https://swapi.dev/api/people.

## Requirements

To successfully complete this assignment, follow these guidelines:

1. **Data Retrieval**: Implement the data retrieval from the SWAPI API using Angular's HTTP Client.

2. **State Management**: Utilize NGRX (NgRx Store) and NGRX Effects to manage the application state and handle API calls. The objects saved in the state should conform to the `Person` interface, which includes the following properties:

   - `fullName`
   - `gender`
   - `birthYear`
   - `height`
   - `mass`

3. **User Interface**: Design your application's user interface to display the retrieved data in a clear and organized manner. You have creative freedom in structuring your application.

## Additional Notes

- Test your application to guarantee proper functionality.
- Have in mind, the data you are going to retrieve from the api is not as the same as you should save it in the state. You should map it in some place, who knows :D.

Please submit your completed Angular application as per the given requirements.

# Posts App

## Description:
Create a web application using Angular that allows users to create, view, and manage posts. The data for this application should be stored in Firebase Firestore.

## Requirements

### Home Page:
- Display a welcome message.
- Include navigation links to the "Home", "About", and "Posts" pages.

### About Page:
- Display information about the app or a brief description.
- Include a back button to return to the home page.

### Posts Page:
- Display a list of posts retrieved from Firestore.
- Each post should show the title, content, author date and time when it was created and number of likes
- Add a button to navigate to the "Create Post" page.

### Create Post Page:
- Create a form to allow users to create new posts.
- Fields: Title, Content, Author, Created At (Date and Time) and Likes (number of likes).
- Implement form validation (All the fields are required).
- When a user submits a post, save it to Firestore and display a success message.
- Add a button to navigate back to the "Posts" page after creating a post.

**Use rxJs (Subjects/BehaviorSubjects and Observables for handling data)**

### Firebase Integration:
- Set up a Firebase project and enable Firestore.
- Connect your Angular app to the Firebase project using AngularFire (Angular's Firebase library).
- Store posts as documents in a Firestore collection "posts".
- Define the structure of your Firestore database ("posts" collection with fields like "title", "content", "author", "timestamp", "likes" etc.).
- Implement Create and Read operations for posts so that you will be able to reterieve all posts and create a new post.

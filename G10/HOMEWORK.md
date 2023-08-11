# [Angular Framework] Hotel Management App

The main goal of this homework is to go thought all the steps of creating a new Angular project using Angular CLI and to get familiar with the Angular project structure.

## Models

### Hotel Model
```
    {
        "id": 1,
        "name": "Hotel Name",
        "address": "Hotel Address",
        "city": "Hotel City",
        "country": "Hotel Country",
        "stars": 5, // 1-5
        "image": "https://via.placeholder.com/150",
        "rooms": [{
            "id": 1,
            "name": "Room Name",
            "description": "Room Description",
            "image": "https://via.placeholder.com/150",
            "price": 100,
            "persons": 2,
            "children": 2,
            "amenities": ["TV", "Air Conditioning", "Mini Bar", "Bathtub", "Free WiFi"]
            "isAvailable": true
        }]
    }
```

## Task 1: 
1. Create a new Angular project using Angular CLI.
2. Create a new component called `hotel-management` and add it to the `app.component.html` file.
3. Showcase a list of hotels in the `hotel-management` component. The list should contain the following information about each hotel: name, location (combination of address, city & country), stars, and image. The list should be displayed in a table or any elements you see fit (you are free to design this as you wish).

## Task 2:
1. Create a new component called `hotel-details`.
2. Add a link on the name of the hotel, in the list from the previous task, that will navigate to the `hotel-details` component and show info about the hotel.
3. On the details page showcase the list of rooms that the hotel has. The list should contain the following information about each room: name, description, image, price, persons, children, currency, amenities, and availability. The list should be displayed in a table or any elements you see fit (you are free to design this as you wish).
4. Create a directive to highlight the rooms that are available (in any way you want by changing some style property).
* the hotel details page can be created on a new route or on the same route as the list of hotels (routing is optional).

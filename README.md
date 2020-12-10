## Installation

-   clone the repo

```
git clone https://github.com/aashik-collab/node.git
```

-   move to working directory

```
 cd node
```

-   install dependencies

```
yarn install
```

## Starting the development server

-   create .env file in config directory
-   copy .env.example and paste in .env
-   start the server

```
yarn start
```

## Tools and Technologies

-   json-web-token to generate and verify token
-   bcryptjs to hash password
-   mongoose ORM for mongodb
-   expressjs to create REST API

## About authentication

we are using json-web-token for authenticating users in the app.

#### how it works

-   user types `email` and `password` and clicks login button
-   front-end make an api call to `/api/users/login` with POST request
-   backend checks validity of `email` and `password` and sends back a token to front-end as a response of `/api/users/login`
-   front-end saves the `token` in `localstorage` and sends the `token` as

```
headers:{
    Authorization: token
}
```

## few important notes

#### About user roles

-   user have two roles: `admin` and `user`
-   middlewares: `verifyAdminToken` and `verifyUserToken`
-   both middlewares provide role

```
req.user = {
    ...
    role:
}
```

# API Routes

## User Component

```

/api/users/login
/api/users/signup

```

## Room Component

#### Rooms

```

/api/rooms/create-room
/api/rooms/update-room/:room_id
/api/rooms/delete-room/:room_id
/api/rooms/view-room-with-bookings/:room_id
/api/rooms/view-room-with-reviews/:room_id

```

#### RoomReviews

```

/api/rooms/room-reviews/create/:room_id
/api/rooms/room-reviews/delete/:room_review_id
/api/rooms/room-reviews/view/:room_id

```

#### RoomBooks

```

/api/rooms/room-books/create/:room_id
/api/rooms/room-books/delete/:room_book_id

```

#### RoomCategories

```

/api/rooms/room-categories/create
/api/rooms/room-categories/update/:room_category_id
/api/rooms/room-categories/view-room-categories

```

#### RoomCategories

```

/api/rooms/room-types/create
/api/rooms/room-types/update/:room_type_id
/api/rooms/room-types/view-room-types

```

## Hall Component

#### Hall

```

/api/halls/create-hall
/api/halls/update-hall/:hall_id
/api/halls/delete-hall/:hall_id
/api/halls/view-hall-with-reviews/:hall_id
/api/halls/view-hall-with-bookings/:hall_id

```

#### HallReviews

```

/api/halls/hall-reviews/create/:hall_id
/api/halls/hall-reviews/delete/:hall_review_id

```

#### HallBooks

```

/api/halls/hall-books/create/:hall_id
/api/halls/hall-books/delete/:hall_book_id

```

#### HallCategories

```

/api/halls/hall-categories/create
/api/halls/hall-categories/update/:hall_category_id
/api/halls/hall-categories/view-hall-categories

```

```

```

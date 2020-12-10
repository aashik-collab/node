## Installation

-   clone the repo

```bash
git clone https://github.com/aashik-collab/node.git
```

-   install dependencies

```bash
yarn install
```

## Starting the development server

-   create .env file in config directory
-   copy .env.example and paste in .env
-   start the server

```bash
yarn start
```

## About authentication

we are using json-web-token for authenticating users in the app.

#### how it works

when a user login with authentication details `email and password` from front-end, backend generates a token for the user, if the details were valid. the token is then stored in localstorage of browser and sent by front end in every request that needs the verification of user

#### few important notes

-   there are two roles of a user: `user` and `admin`
-   there are two middlewares `verifyUserToken` and `verifyAdminToken` to check token validity sent from front-end
-   `verifyUserToken` only checks if the token is valid, so admin can also pass this middleware
-   `verifyAdminToken` strictly checks if the token received belongs to an admin user, so only admin can pass this middleware
-   It can be checked whether the user from `verifyUserToken` is `admin` or `user`, the `req.user` comes with a `role`:
    ```
    {
        role:
    }
    ```

# API Routes

## User Component

```
/api/users/login
/apiu/users/signup
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

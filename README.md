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

# API Routes

## Room

##### POST

-   create room

```
/api/rooms/create-room
```

##### PUT

-   update room

```
/api/rooms/update-room/:room_id
```

##### DELETE

-   delete room

```
/api/rooms/delete-room/:room_id
```

##### GET

-   view room with all reviews in time descending order

```
/api/rooms/view-room-with-reviews/:room_id
```

-   view room with bookings in time descending order

```
/api/rooms/view-room-with-bookings/:room_id
```

## RoomTypes

##### POST

-   create room type

```
/api/rooms/room-types/create
```

##### PUT

-   update room type

```
/api/rooms/room-types/update/:room_type_id
```

##### GET

-   view all room types in ascending alphabetical order

```
/api/rooms/room-types/view-room-types
```

## RoomCategories

##### POST

-   create room category

```
/api/categories/room-categories/create
```

##### PUT

-   update room category

```
/api/categories/room-categories/update/:room_category_id
```

##### GET

-   view all room categories in ascending alpabetical order

```
/api/categories/room-categories/view-room-categories
```

## RoomReviews

##### POST

-   create a room review

```
/api/rooms/room-reviews/create/:room_id
```

##### DELETE

-   delete a room review

```
/api/rooms/room-reviews/delete/:room_review_id
```

##### GET

-   view all room reviews associated with a room

```
/api/rooms/room-reviews/view/:room_id
```

## RoomBookings

##### POST

-   create a room booking

```
/api/rooms/room-books/create/:room_id
```

##### DELETE

-   delete a room booking

```
/api/rooms/room-books/delete/:room_book_id
```

## Hall

##### POST

##### PUT

##### DELETE

##### GET

## HallCategories

##### POST

##### PUT

##### DELETE

##### GET

## HallReviews

##### POST

##### PUT

##### DELETE

##### GET

## HallBookings

##### POST

##### PUT

##### DELETE

##### GET

## User

##### POST

##### PUT

##### DELETE

##### GET

## Profile

##### POST

##### PUT

##### DELETE

##### GET

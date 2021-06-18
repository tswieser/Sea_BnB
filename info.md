## Users
| Column name | Data type| Details |
|---|---|---|
|id| integer| not null, primary key|
|user_name| varchar(50)| not null, unique |
| email| varchar(50)|not null, unique|
| hashed password| varchar(50)|not null|
|created_at | datetime| not null|
|updated_at | datetime| not null|

<br>
<br>

## Docks
| Column name | Data type| Details |
|---|---|---|
|id| integer| not null, primary key|
|dock_name| varchar(50)| not null |
| address| text |not null|
| city| varchar(50)|not null|
| state| varchar(50)|not null|
| price|decimal(10,2)|not null|
| lat|integer|not null|
| lng|integer|not null|
| user_id|integer| fk, not null|
|created_at | datetime| not null|
|updated_at | datetime| not null|

* user_id references users table
<br>
<br>


## Reviews
| Column name | Data type| Details |
|---|---|---|
|id| integer| not null, primary key|
| rating|integer|not null|
| review| text ||
| user_id|integer| fk, not null|
| dock_id|integer| fk, not null|
| price|decimal(10,2)|not null|
|created_at | datetime| not null|
|updated_at | datetime| not null|

* user_id references users table
* dock_id references docks table
<br>
<br>


## Reservations
| Column name | Data type| Details |
|---|---|---|
|id| integer| not null, primary key|
| start_date|datetime|not null|
| end_date| datetime |not null|
| user_id|integer| fk, not null|
| dock_id|integer| fk, not null|
| price|decimal(10,2)|not null|
|created_at | datetime| not null|
|updated_at | datetime| not null|

* user_id references users table
* dock_id references docks table
<br>
<br>

## images
| Column name | Data type| Details |
|---|---|---|
|id| integer| not null, primary key|
| dock_id|integer| fk, not null|
| url|varchar|not null|
|created_at | datetime| not null|
|updated_at | datetime| not null|
* dock_id references docks table
<br>
<br>








Table users {
  id int [pk, increment] // auto-increment
  user_name varchar(50)
  email varchar(50)
  hased_password varchar(50)
  created_at timestamp
  updated_at timestamp
}

Table docks {
  id int [pk, increment] // auto-increment
  dock_name varchar(50)
  address text
  city varchar
  state varchar
  price decimal (10,2)
  lat decimal
  lng decimal
  user_id fk
  created_at timestamp
  updated_at timestamp
}

Ref: "users"."id" < "docks"."user_id"

Table reservations {
  id int [pk, increment] // auto-increment
  start_date datetime
  end_date datetime
  price decimal (10,2)
  user_id fk
  dock_id fk
  created_at timestamp
  updated_at timestamp
}

Ref: "users"."id" < "reservations"."user_id"

Ref: "docks"."id" < "reservations"."dock_id"


Table reviews {
  id int [pk, increment] // auto-increment
  rating integer
  review text
  user_id fk
  dock_id fk
  created_at timestamp
  updated_at timestamp
}



Ref: "users"."id" < "reviews"."user_id"

Ref: "docks"."id" < "reviews"."dock_id"

Table images {
  id int [pk, increment] // auto-increment
  dock_id fk
  url varchar
  created_at timestamp
  updated_at timestamp
}


Ref: "images"."dock_id" < "docks"."id"

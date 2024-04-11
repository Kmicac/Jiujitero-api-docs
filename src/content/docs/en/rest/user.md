---
title: Users
description: Endpoints for Users
---

## Get all users

You can access the list of 3 users by using the `/users` endpoint.

Request:

```sh
[GET] https://jiujitero-api.onrender.com/api/v1/users
```

Response:

```json
[
  {
	"_id": "66091da036dfc4ae824f5212",
	"name": "Justo Del Toro",
	"email": "deltoro@gmail.com",
	"phone": 5493887357229,
	"isActive": true,
	"roles": [
		"user"
	]
  },
//  ... 2 more users 
]
```

## Get a single user

You can get a single user by adding the `id` as a parameter: `/users/{id}`

Request:

```sh
[GET] https://jiujitero-api.onrender.com/api/v1/users/66091da036dfc4ae824f5212
```

Response:

```json
{
  "_id": "66091da036dfc4ae824f5212",
  "name": "Justo Del Toro",
  "email": "deltoro@gmail.com",
  "phone": 5493887357229,
  "isActive": true,
  "roles": [
  	"user"
  ]
},
```

## Create a user

You can create a new user by sending an object like the following to `/users/`

Request:

```sh
[POST] https://jiujitero-api.onrender.com/api/v1/users/
# Body
{
  "name": "Aurelio Martinez",
  "email": "cpacarg@gmail.com",
  "password": "Abcd0987"
}
```

Response:

```json
{
	"name": "Aurelio Martinez",
	"email": "cpacarg@gmail.com",
	"password": "$2b$10$N1eyn1.iMY6Gbk5P9qsg9u5QdJHNznYkZLzS9WPCBqCPhT0BfTTe6",
	"isActive": true,
	"roles": [
		"user"
	],
	"_id": "660927bed93ba9ab054cafb7"
}
```

> Note that the password is encrypted, you can also feel free to add the attribute `phone` to the creation body.

## Update a user

You can update a user exists by sending an object like the following and adding the `id` as a parameter: `/users/{id}`

Request:

```sh
[PATCH] https://jiujitero-api.onrender.com/api/v1/users/660927bed93ba9ab054cafb7
# Body

{
  "email": "martinezau@gmail.com",
  "phone": 3513075555
}
```

Response:

```json
{
  "_id": "660927bed93ba9ab054cafb7",
  "name": "Aurelio Martinez",
  "email": "martinezau@gmail.com",
  "phone": 3513075555,
  "isActive": true,
  "roles": [
  	"user"
  ],
}
```

> Note that is not necessary to send all user attributes, just send the attributes that want to update.

## Delete a user

You can delete an existing user by sending the request using `id` as a parameter: `/users/{id}`

Request:

```sh
[DELETE] http://localhost:1234/api/v1/users/660927bed93ba9ab054cafb7
```
Response:

```json
"User with id 660927bed93ba9ab054cafb7 has been deleted"
```

> **Note that you have to be an authorized user with the admin role to be able to delete a user.**

## Check the email

You can verify if an email is already registered in the API.

Request:

```sh
[POST] https://jiujitero-api.onrender.com/api/v1/users/is-available
# Body
{
  "email": "john@mail.com"
}
```

Response:

```json
{
	"isAvailable": false
}
```

This feature is so useful for features like showing a message in a form and verifying the email before creating a user. For example:

![Example](https://i.imgur.com/Igy8mhu.png)

## Schema User

| Attribute  | Type | Description |
| --- | --- | --- |
| id | string | The id of the user. |
| name | string | The name of the user. |
| email | string | The email of the user. |
| password | string | The password of the user. |
| phone | number | The phone number of the user. |
| isActive | boolean | Whether the user is active or inhabilitated. |
| role | string | The role of the user is user, super-user or admin. |

---
title: Auth JWT
description: Endpoints for Authentication JWT
---

## Authentication

You can do login by sending an object like the following to `/auth/login/`

Request:

```sh
[POST] https://jiujitero-api.onrender.com/api/v1/auth/login
# Body

{
	"email": "olega@gmail.com",	
	"password": "Abcd0987"
}
```

The response is the credentials with the access token, like this:

```json
{
	"email": "olega@gmail.com",
	"password": "$2b$10$zJAja4PYRmqEuZOlMGmrNulMqz7rKFPV9P6mtpJejHWRGjy1QO07S",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGY5NzZhMWFlYWE1MGJlZDQ0Yzk0ZiIsImlhdCI6MTcxMjI5OTg2MCwiZXhwIjoxNzEyMzI4NjYwfQ.CbyX4NSX1IZbPyMat9TQcogAvGG1SzZmhN9gi8_wmls"
}
```

> Note: The access token is valid for 8 hours.

## Get user with session

You can get the profile the current user with session if in the headers include the `Authorization` key with the value `Bearer {your access token}` to `/auth/profile`

Request:

```sh
[GET] https://jiujitero-api.onrender.com/api/v1/auth/private
# Headers

{
  "Authorization": "Bearer {your access token}"
}
```

Response:

```json
{
    "user": {
        "_id": "660f976a1aeaa50bed44c94f",
        "name": "Olegario Ortega",
        "email": "olega@gmail.com",
        "phone": 5492887542014,
        "image": "https://i.imgur.com/B7AQyzo.png",
        "isActive": true,
        "roles": [
            "super-user"
        ],
    }
}
```

## Get a new Access Token by refreshing the token

Request:

```sh
[POST] https://jiujitero-api.onrender.com/api/v1/auth/check-status
# Headers
{
  "Bearer": "{your access token}"
}
```

The response is the user information with the new access JWT token and the expiration time, like this:

```json
{
	"user": {
		"_id": "660f976a1aeaa50bed44c94f",
		"name": "Olegario Ortega",
		"email": "olega@gmail.com",
		"phone": 5492887542014,
		"image": "https://i.imgur.com/B7AQyzo.png",
		"isActive": true,
		"roles": [
			"super-user"
		],
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGY5NzZhMWFlYWE1MGJlZDQ0Yzk0ZiIsImlhdCI6MTcxMjI5OTg3OSwiZXhwIjoxNzEyMzI4Njc5fQ.2eH2TkoL_aIb-wa5wilMkx48bhgpCjpuuQ6DD_wrQVw",
	"expiresIn": 28800000
}
```

> **You can use this endpoint in cases when you have lost session or need to obtain a new token.**
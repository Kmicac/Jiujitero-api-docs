---
title: Academies
description: Endpoints for Academies
---

## Get all Academies

You can access the list of 10 Academy by using the `/academys` endpoint.

Request:

```
[GET] https://jiujitero-api.onrender.com/api/v1/academys
```

Response:

```json
[
  {
     "_id": "65fa95f40e9d93d0fb93243d",
     "name": "10th planet jiu-jitsu",
     "location": "Los Angeles, California",
     "professor": "Eddie Bravo",
     "phone": 080055512345
  },
// ...
]
```

## Get a single academy


You can get a single academy by adding the `id` as a parameter: `/academys/{id}`

Request:

```sh
[GET] https://jiujitero-api.onrender.com/api/v1/academys/65fa95f40e9d93d0fb93243d
```

Response:

```json
{
    "_id": "65fa95f40e9d93d0fb93243d",
    "name": "10th planet jiu-jitsu",
    "location": "Los Angeles, California",
    "professor": "Eddie Bravo",
    "phone": 080055512345
}
```

## Create a academy


You can create a new academy by sending an object like the following to `/academys/`

Request:

```sh
[POST] https://jiujitero-api.onrender.com/api/v1/academys/
# Body
{
	"name": "New Academy",
	"location": "Place where academy is located",
	"professor": "Professor name",
	"phone": 1234000555,
    "image": "https://www.jjimageexample.com.jpeg"
}
```

Response:

```json
{
    "_id": "87fa95f40e9d93d0fb55466c",
    "name": "New Academy",
    "location": "Place where academy is located",
    "professor": "Professor name",
    "phone": 1234000555,
    "image": "https://www.jjimageexample.com.jpeg"
}
```

> Note that the image is an URLs that must be ending in a valid image extencion. 

## Update a academy


You can update an existing academy by sending an object like the following and adding the `id` as a parameter: `/academys/{id}`

Request:

```sh
[PATCH] https://jiujitero-api.onrender.com/api/v1/academys/87fa95f40e9d93d0fb55466c
# Body
{
  "name": "Change title"
}
```

Response:

```json
{
    "_id": "87fa95f40e9d93d0fb5466c",
	"name": "Change title",
	"location": "Place where academy is located",
	"professor": "Professor name",
	"phone": 1234000555
}

```

> Note that it is not necessary to send all the academy attributes, just send the attributes that want to update.

## Delete a academy


You can delete an existing academy by adding the `id` as a parameter: `/academia/{id}`

Request:

```sh
[DELETE] https://jiujitero-api.onrender.com/api/v1/academys/87fa95f40e9d93d0fb55466c
```

Response:

```sh
'Academy with id 87fa95f40e9d93d0fb55466c its been deteled'
```

## Get all Athletes by Academy

**No information completed yet**

You can get all athletes by Academy adding the `academyID` as a parameter to `/academys/{academyID}/athletes`

Request:

```
[GET] https://jiujitero-api.onrender.com/api/v1/academys/65fa95f40e9d93d0fb932435/athletes
```

Response:

```json
[
  {

     "info": {},
  }
  // ...
]
```

## Schema Academy


| Attribute | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| id        | string | The id of the academy           |                                                    
| name      | string | Name of the academy             |                                                    
| locaion   | string | The place where is located      |                                                    
| professor | string | Founder or who teach at in place|                                                    
| phone     | number | number for phone comunication   |
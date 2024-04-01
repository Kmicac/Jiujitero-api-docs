---
title: Athletes
description: Endpoints for managing athletes
---

## Create an Athlete

**Create a new athlete by sending an object like the following to** `/athletes/`

Request:

```sh
[POST] http://localhost:1234/api/v1/athletes/
#Body

{
  "name": "Marcelo",
  "lastName": "Ribeiro",
  "team": "B Team",
  "email": "marcelino@bteam.com"
}
```
Response:

```json
{
  "_id": "609c72c03a51cf0015f129e7",
  "name": "Marcelo",
  "lastName": "Ribeiro",
  "team": "B Team",
  "email": "marcelino@bteam.com",
}
```

## Search Athletes
**Search athletes by name.**

Request:

```sh
[GET] http://localhost:1234/api/v1/athletes/search?name=john
```
Response:

```json
[
  {
    "_id": "609c72c03a51cf0015f129e7",
    "name": "John",
    "lastName": "Doe",
    "team": "Team A",
    "email": "john.doe@example.com"
  }
]
```
> Note that either you look for a capitalation name or not you always gonna receive the name you're looking for

## Get All Athletes
**Get a list of all athletes.**

Request:

```sh
[GET] http://localhost:1234/api/v1/athletes
```
Response:

```json
[
  {
    "_id": "609c72c03a51cf0015f129e7",
    "name": "John",
    "lastName": "Doe",
    "team": "Team A",
    "email": "john.doe@example.com"
  },
  // ... and other 600 athletes
]
```

## Update an Athlete
**Update an athlete by sending an object like the following and adding the id as a parameter:** `/athletes/<id>`

Request:

```sh
[PATCH] http://localhost:1234/api/v1/athletes/609c72c03a51cf0015f129e7

# Body

{
  "name": "Jane",
  "email": "janeacosta@gmail.com"
}
```
Response:

```json
{
  "_id": "609c72c03a51cf0015f129e7",
  "name": "Jane",
  "lastName": "Acosta",
  "team": "Six Blades",
  "email": "janeacosta@gmail.com"
}
```
> Note that it is not necessary to send all product attributes, just send the ones you want to update.


## Delete an Athlete
 **Delete an athlete by adding the id as a parameter:** `/athletes/<id>`

Request:

```sh
[DELETE] http://localhost:1234/api/v1/athletes/609c72c03a51cf0015f129e7
```
Response:

```json
"Athlete with id 609c72c03a51cf0015f129e7 has been deleted"
```

## Pagination
 **Get a paginated list of athletes.**

APIs that use offset-based paging use the offset and limit query parameters to paginate through items in a collection.

Offset-based pagination is often used where the list of items is of a fixed and predetermined length.

To fetch the first page of entries in a collection, the API needs to be called with the `offset` set to 0 and the `limit` the products that you want in the response.

Request:

```sh
[GET] http://localhost:1234/api/v1/athletes/pagination?offset=0&limit=10
```
Response:

```json
{
  "data": [
    {
      "_id": "609c72c03a51cf0015f129e7",
      "name": "John",
      "lastName": "Doe",
      "team": "Team A",
      "email": "john.doe@example.com"
    }
    // ... and 9 items more
  ],
  "total": 10
}
```
To fetch the **next page** of entries, the API needs to be called with an offset parameter that equals the sum of the previous offset value and limit returned to the previous result,

To get the **next page** of entries, use an offset parameter equal to the sum of the previous offset value and the limit returned to the previous result, `previous offset + previous limit`.

> Note that the offset should be increased by the previous limit and not by the size of the entries in the response array, as this may be less than the limit. Generally, we advise using the value of the limit in the response object to increase the offset value.

For example, for a pagination with 10 items per page, it looks like this:

<!-- ```bash
[GET] http://localhost:1234/api/v1/athletes/pagination?offset=0&limit=10
[GET] http://localhost:1234/api/v1/athletes/pagination?offset=10&limit=10
[GET] http://localhost:1234/api/v1/athletes/pagination?offset=20&limit=10
``` -->

|   Request                                   | Description                   |
| --------------------------------------------| ----------------------------- |
| /athletes/pagination?**offset=0&limit=10**  | Return the first 10 athletes. |
| /athletes/pagination?**offset=10&limit=10** | Return athletes from 10 to 20 |
| /athletes/pagination?**offset=20&limit=10** | Return athletes from 20 to 30 |

Or for a pagination with 20 items per page, it looks like this:

|   Request                                   | Description                   |
| --------------------------------------------| ----------------------------- |
| /athletes/pagination?**offset=0&limit=20**  | Return the first 20 athletes. |
| /athletes/pagination?**offset=20&limit=20** | Return athletes from 20 to 40 |
| /athletes/pagination?**offset=40&limit=20** | Return athletes from 40 to 60 |

## Schema Athlete

| Attribute | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| _id       | string | The id of the athlete.       |
| name      | string | The name of the athlete.     |
| lastName  | string | The last name of the athlete.|
| team      | string | The team of the athlete.     |
| email     | string | The email of the athlete.    |

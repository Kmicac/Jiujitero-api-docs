---
title: Filter Athletes
description: Endpoints for Filter Athletes
---


## Filter by name

By using the `/athletes` endpoint and passing `name` as a query parameter, you can filter for athletes by name. 

Request:

```sh
[GET] http://localhost:3000/api/v1/athletes/search?name=Alexander  or  /athletes?name=Alexander
```

## Filter by last name

By using the `/athletes` endpoint and passing `lastName` as a query parameter, you can filter for athletes by last name. 

Request:

```sh
[GET] http://localhost:3000/api/v1/athletes?lastName=Machado
```

## Filter by team 

By using the `/athletes` endpoint and passing `team` as a query parameter, you can filter for athletes by team.

Request:

```sh
[GET] http://localhost:3000/api/v1/athletes?team=Alliance
```

## Filter by email

By using the `/athletes` endpoint and passing `email` as a query parameter, you can filter for athletes by email address.

Request:

```sh
[GET] http://localhost:3000/api/v1/athletes?email=a%40example.com
```

## Join filters

You can filter athletes using all query parameters and merge them all.


**Example:** All athletes with a certain name who belongs to a certain team.

```sh
[GET]
http://localhost:3000/api/v1/athletes?name=ale&team=Alliance
```


**Example:** All athletes with a last name of `Gracie`, and belongs to the academy `Gracie`, with a limit of `5` athletes and an offset of `5`.

```sh
[GET]
http://localhost:3000/api/v1/athletes/pagination?limit=5&offset=5&lastName=Gracie&team=Gracie
```


**Example:** All athletes who belongs to the team `Alliance`, and with a limit of `10` athletess and an offset of `10`.

```sh
[GET]
http://localhost:3000/api/v1/athletes/pagination?limit=10&offset=10&team=Alliance
```


>> **Note:** Soon, more query parameters will be added to this route as more properties will be added to the Athlete model.
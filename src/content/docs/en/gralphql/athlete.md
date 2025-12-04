---
title: Athletes (GraphQL)
description: GraphQL queries for managing athletes
---

## Athletes

Query and filter Jiu-Jitsu athletes using GraphQL.

### Schema Types

#### AthleteType
```graphql
type AthleteType {
  id: ID!
  name: String!
  lastName: String!
  nickname: String
  age: Int!
  weight: Float!
  height: Float!
  team: String!
  belt: String!
  category: String!
  nationality: String!
  image: String!
  achievements: [String!]
}
```

---

## Queries

### Get All Athletes

Retrieve all athletes with optional pagination.

**Query:**
```graphql
query GetAthletes {
  athletes(paginationInput: { limit: 10, offset: 0 }) {
    id
    name
    lastName
    nickname
    age
    weight
    height
    team
    belt
    category
    nationality
    image
    achievements
  }
}
```

**Response:**
```json
{
  "data": {
    "athletes": [
      {
        "id": "507f1f77bcf86cd799439011",
        "name": "Marcus",
        "lastName": "Almeida",
        "nickname": "Buchecha",
        "age": 33,
        "weight": 105.5,
        "height": 1.88,
        "team": "Checkmat",
        "belt": "Black Belt",
        "category": "Ultra-Heavy",
        "nationality": "Brazilian",
        "image": "https://example.com/buchecha.jpg",
        "achievements": [
          "13x World Champion",
          "4x ADCC Champion"
        ]
      }
    ]
  }
}
```

### Get Athlete by ID

Retrieve a specific athlete by their ID.

**Query:**
```graphql
query GetAthlete {
  athlete(id: "507f1f77bcf86cd799439011") {
    id
    name
    lastName
    nickname
    team
    belt
    achievements
  }
}
```

---

## Filtering Athletes

### Filter by Team

Get all athletes from a specific team.

**Query:**
```graphql
query GetAthletesByTeam {
  filterAthletesByTeam(team: "Alliance") {
    id
    name
    lastName
    nickname
    team
    belt
  }
}
```

### Filter by Name

Search athletes by name or last name.

**Query:**
```graphql
query SearchAthletes {
  searchAthletesByName(name: "Gordon") {
    id
    name
    lastName
    nickname
    team
    belt
  }
}
```

### Filter by Belt

Get athletes by belt level.

**Query:**
```graphql
query GetBlackBelts {
  filterAthletesByBelt(belt: "Black Belt") {
    id
    name
    lastName
    team
    achievements
  }
}
```

### Filter by Nationality

Get athletes by country.

**Query:**
```graphql
query GetBrazilianAthletes {
  filterAthletesByNationality(nationality: "Brazilian") {
    id
    name
    lastName
    team
    belt
  }
}
```

---

## Pagination

Use the `paginationInput` parameter to control pagination:

**Query:**
```graphql
query GetAthletesPaginated {
  athletes(paginationInput: { 
    limit: 20
    offset: 0 
  }) {
    id
    name
    lastName
    team
  }
}
```

**Parameters:**
- **limit**: Number of items to return (default: 10, max: 100)
- **offset**: Number of items to skip (default: 0)

---

## Belt Levels

Available belt levels:
- White Belt
- Blue Belt
- Purple Belt
- Brown Belt
- Black Belt
- Coral Belt
- Red Belt

---

## Weight Categories

Common weight categories:
- Rooster (under 57.5 kg)
- Light Feather (under 64 kg)
- Feather (under 70 kg)
- Light (under 76 kg)
- Middle (under 82.3 kg)
- Medium Heavy (under 88.3 kg)
- Heavy (under 94.3 kg)
- Super Heavy (under 100.5 kg)
- Ultra Heavy (over 100.5 kg)

---

## Example: Complex Query

Get detailed information about top athletes from a specific team:
```graphql
query GetTopAlliance {
  filterAthletesByTeam(team: "Alliance") {
    id
    name
    lastName
    nickname
    age
    weight
    height
    belt
    category
    nationality
    image
    achievements
  }
}
```

---

:::tip[Try it in Playground]
Test athlete queries in the [GraphQL Playground](/en/gralphql/playground) with real data.
:::

:::note[Read-Only]
Athlete data is currently read-only. Create, update, and delete operations are restricted to administrators.
:::
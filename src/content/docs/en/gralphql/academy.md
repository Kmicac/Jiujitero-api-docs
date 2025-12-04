---
title: Academies (GraphQL)
description: GraphQL queries and mutations for managing academies
---

## Academies

Manage Jiu-Jitsu academies using GraphQL queries and mutations.

### Schema Types

#### AcademyType
```graphql
type AcademyType {
  id: ID!
  name: String!
  professor: String!
  location: String!
  phone: String
  image: String!
}
```

#### CreateAcademyInput
```graphql
input CreateAcademyInput {
  name: String!
  professor: String!
  location: String!
  phone: String
  image: String!
}
```

#### UpdateAcademyInput
```graphql
input UpdateAcademyInput {
  name: String
  professor: String
  location: String
  phone: String
  image: String
}
```

---

## Queries

### Get All Academies

Retrieve all academies with optional pagination.

**Query:**
```graphql
query GetAcademies {
  academies(paginationInput: { limit: 10, offset: 0 }) {
    id
    name
    professor
    location
    phone
    image
  }
}
```

**Response:**
```json
{
  "data": {
    "academies": [
      {
        "id": "507f1f77bcf86cd799439011",
        "name": "Alliance Jiu-Jitsu",
        "professor": "Fabio Gurgel",
        "location": "São Paulo, Brazil",
        "phone": "+55 11 98765-4321",
        "image": "https://example.com/alliance.jpg"
      }
    ]
  }
}
```

### Search Academies by Name

Search for academies by name.

**Query:**
```graphql
query SearchAcademies {
  searchAcademiesByName(name: "Alliance") {
    id
    name
    professor
    location
    phone
    image
  }
}
```

---

## Mutations

### Create Academy

Create a new academy. **Requires authentication.**

**Mutation:**
```graphql
mutation CreateAcademy {
  createAcademy(createAcademyInput: {
    name: "Gracie Barra"
    professor: "Carlos Gracie Jr."
    location: "Rio de Janeiro, Brazil"
    phone: "+55 21 98765-1234"
    image: "https://example.com/gracie-barra.jpg"
  }) {
    id
    name
    professor
    location
    phone
    image
  }
}
```

**Headers Required:**
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN"
}
```

**Response:**
```json
{
  "data": {
    "createAcademy": {
      "id": "507f1f77bcf86cd799439012",
      "name": "Gracie Barra",
      "professor": "Carlos Gracie Jr.",
      "location": "Rio de Janeiro, Brazil",
      "phone": "+55 21 98765-1234",
      "image": "https://example.com/gracie-barra.jpg"
    }
  }
}
```

### Update Academy

Update an existing academy. **Requires authentication.**

**Mutation:**
```graphql
mutation UpdateAcademy {
  updateAcademy(
    id: "507f1f77bcf86cd799439011"
    updateAcademyInput: {
      phone: "+55 11 99999-8888"
      location: "São Paulo, SP, Brazil"
    }
  ) {
    id
    name
    professor
    location
    phone
    image
  }
}
```

**Headers Required:**
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN"
}
```

### Delete Academy

Delete an academy by ID. **Requires authentication.**

**Mutation:**
```graphql
mutation RemoveAcademy {
  removeAcademy(id: "507f1f77bcf86cd799439011")
}
```

**Headers Required:**
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN"
}
```

**Response:**
```json
{
  "data": {
    "removeAcademy": "Academy deleted successfully"
  }
}
```

---

## Pagination

Use the `paginationInput` parameter to control pagination:
```graphql
query GetAcademiesPaginated {
  academies(paginationInput: { 
    limit: 5
    offset: 10 
  }) {
    id
    name
    professor
    location
  }
}
```

- **limit**: Number of items to return (default: 10)
- **offset**: Number of items to skip (default: 0)

---

:::tip[Try it in Playground]
Test these queries and mutations in the [GraphQL Playground](/en/gralphql/playground)
:::

:::caution[Authentication Required]
Create, update, and delete operations require a valid JWT token. Use the login mutation to obtain one.
:::
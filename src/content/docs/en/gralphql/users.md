---
title: Users (GraphQL)
description: GraphQL queries and mutations for managing users
---

## Users

Manage users using GraphQL queries and mutations.

### Schema Types

#### UserType
```graphql
type UserType {
  id: ID!
  name: String!
  email: String!
  phone: Float
  image: String
  roles: [String!]!
  isActive: Boolean!
}
```

#### CreateUserInput
```graphql
input CreateUserInput {
  name: String!
  email: String!
  password: String!
  phone: Float
}
```

---

## Queries

### Get All Users

Retrieve all users. **Requires authentication.**

**Query:**
```graphql
query GetUsers {
  users {
    id
    name
    email
    phone
    image
    roles
    isActive
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
    "users": [
      {
        "id": "507f1f77bcf86cd799439011",
        "name": "John Doe",
        "email": "john@example.com",
        "phone": 1234567890,
        "image": "https://example.com/avatar.jpg",
        "roles": ["user"],
        "isActive": true
      }
    ]
  }
}
```

### Get User by ID

Retrieve a specific user by ID. **Requires authentication.**

**Query:**
```graphql
query GetUser {
  user(id: "507f1f77bcf86cd799439011") {
    id
    name
    email
    phone
    image
    roles
    isActive
  }
}
```

**Headers Required:**
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN"
}
```

### Get Current User (Me)

Get the currently authenticated user's information.

**Query:**
```graphql
query GetMe {
  me {
    id
    name
    email
    phone
    image
    roles
    isActive
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
    "me": {
      "id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": 1234567890,
      "image": "https://example.com/avatar.jpg",
      "roles": ["user", "admin"],
      "isActive": true
    }
  }
}
```

---

## Mutations

### Create User

Create a new user account.

**Mutation:**
```graphql
mutation CreateUser {
  createUser(createUserInput: {
    name: "Jane Smith"
    email: "jane@example.com"
    password: "SecurePassword123!"
    phone: 9876543210
  }) {
    id
    name
    email
    phone
    roles
    isActive
  }
}
```

**Response:**
```json
{
  "data": {
    "createUser": {
      "id": "507f1f77bcf86cd799439012",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "phone": 9876543210,
      "roles": ["user"],
      "isActive": true
    }
  }
}
```

### Delete User

Delete a user by ID. **Requires authentication and admin role.**

**Mutation:**
```graphql
mutation DeleteUser {
  deleteUser(id: "507f1f77bcf86cd799439011")
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
    "deleteUser": "User deleted successfully"
  }
}
```

---

## User Roles

Users can have the following roles:

- **user**: Basic user with limited permissions
- **admin**: Administrator with full access

Roles are assigned automatically upon user creation. The first user typically receives admin privileges.

---

:::tip[Try it in Playground]
Test these queries and mutations in the [GraphQL Playground](/en/gralphql/playground)
:::

:::caution[Authentication Required]
Most user operations require a valid JWT token. Use the login mutation to obtain one.
:::

:::danger[Admin Only]
Deleting users requires admin role. Ensure you have the necessary permissions.
:::
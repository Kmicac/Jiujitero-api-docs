---
title: Authentication (GraphQL)
description: GraphQL authentication with JWT tokens
---

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Obtain a token by logging in, then include it in the Authorization header for protected endpoints.

### Schema Types

#### AuthResponseType
```graphql
type AuthResponseType {
  token: String!
  user: UserType!
  email: String!
}
```

#### LoginInput
```graphql
input LoginInput {
  email: String!
  password: String!
}
```

---

## Mutations

### Login

Authenticate a user and receive a JWT token.

**Mutation:**
```graphql
mutation Login {
  login(loginInput: {
    email: "john@example.com"
    password: "YourPassword123!"
  }) {
    token
    email
    user {
      id
      name
      email
      roles
      isActive
    }
  }
}
```

**Response:**
```json
{
  "data": {
    "login": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "email": "john@example.com",
      "user": {
        "id": "507f1f77bcf86cd799439011",
        "name": "John Doe",
        "email": "john@example.com",
        "roles": ["user", "admin"],
        "isActive": true
      }
    }
  }
}
```

---

## Queries

### Check Auth Status

Verify if your current token is valid and get user information.

**Query:**
```graphql
query CheckAuth {
  checkAuthStatus {
    token
    email
    user {
      id
      name
      email
      roles
      isActive
    }
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
    "checkAuthStatus": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "email": "john@example.com",
      "user": {
        "id": "507f1f77bcf86cd799439011",
        "name": "John Doe",
        "email": "john@example.com",
        "roles": ["user", "admin"],
        "isActive": true
      }
    }
  }
}
```

---

## Using JWT Tokens

### 1. Obtain a Token

First, log in to get your JWT token:
```graphql
mutation {
  login(loginInput: {
    email: "your@email.com"
    password: "yourpassword"
  }) {
    token
  }
}
```

### 2. Add Token to Headers

Include the token in the HTTP Headers for protected operations:

**In GraphQL Playground:**

Click on "HTTP HEADERS" at the bottom and add:
```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 3. Make Authenticated Requests

Now you can access protected queries and mutations:
```graphql
query {
  me {
    id
    name
    email
  }
}
```

---

## Token Expiration

JWT tokens expire after **8 hours**. After expiration, you'll need to log in again to obtain a new token.

**Error when token expires:**
```json
{
  "errors": [
    {
      "message": "Unauthorized",
      "extensions": {
        "code": "UNAUTHENTICATED"
      }
    }
  ]
}
```

---

## Protected Operations

The following operations require authentication:

### Queries
- `users` - Get all users
- `user(id)` - Get user by ID
- `me` - Get current user
- `checkAuthStatus` - Verify token

### Mutations
- `createAcademy` - Create academy
- `updateAcademy` - Update academy
- `removeAcademy` - Delete academy
- `deleteUser` - Delete user (admin only)

---

## Example: Complete Authentication Flow

### Step 1: Register a new user
```graphql
mutation {
  createUser(createUserInput: {
    name: "John Doe"
    email: "john@example.com"
    password: "SecurePass123!"
  }) {
    id
    email
  }
}
```

### Step 2: Login
```graphql
mutation {
  login(loginInput: {
    email: "john@example.com"
    password: "SecurePass123!"
  }) {
    token
    user {
      id
      name
      roles
    }
  }
}
```

### Step 3: Use protected endpoints

Add the token to headers and access protected data:
```graphql
query {
  me {
    id
    name
    email
    roles
  }
}
```

---

:::tip[Testing in Playground]
Use the [GraphQL Playground](/en/gralphql/playground) to test authentication flows with real-time token management.
:::

:::caution[Token Security]
Never share your JWT tokens. They provide full access to your account. Store them securely and never commit them to version control.
:::

:::note[Token Format]
Always include "Bearer " before your token in the Authorization header:
```
Authorization: Bearer YOUR_TOKEN_HERE
```
:::
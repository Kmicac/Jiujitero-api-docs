---
title: GraphQL Playground
description: GraphQL Playground
---

---
title: GraphQL Playground
description: Interactive GraphQL Playground for testing queries and mutations
---

## GraphQL Playground

The GraphQL Playground is an interactive, in-browser GraphQL IDE that allows you to explore the API, test queries and mutations, and view the schema documentation.

### Access the Playground

You can access the GraphQL Playground at:
```
https://jiujitero-api.onrender.com/graphql
```

### Features

- 🔍 **Schema Explorer**: Browse the complete GraphQL schema
- 📝 **Auto-completion**: IntelliSense for queries and mutations
- 📚 **Documentation**: Built-in docs for all types, queries, and mutations
- 🎯 **Query History**: Keep track of your previous queries
- 🔐 **Authentication**: Test authenticated endpoints with JWT tokens

### How to Use

1. Open the [GraphQL Playground](https://jiujitero-api.onrender.com/graphql)
2. Write your query or mutation in the left panel
3. Click the "Play" button to execute
4. View the results in the right panel

### Example Queries

#### Get All Academies
```graphql
query GetAcademies {
  academies {
    id
    name
    professor
    location
    phone
    image
  }
}
```

#### Get Users
```graphql
query GetUsers {
  users {
    id
    name
    email
    roles
    isActive
  }
}
```

#### Login
```graphql
mutation Login {
  login(loginInput: {
    email: "test@example.com"
    password: "yourPassword"
  }) {
    token
    user {
      id
      name
      email
    }
  }
}
```

### Authentication

For protected endpoints, you need to add the JWT token in the HTTP Headers:
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN_HERE"
}
```

### Try it Now

<iframe 
  src="https://jiujitero-api.onrender.com/graphql" 
  style="width: 100%; height: 600px; border: 1px solid #ccc; border-radius: 8px;"
  title="GraphQL Playground"
></iframe>

:::tip
The Playground includes auto-completion and schema documentation. Press `Ctrl + Space` to see available fields and operations.
:::

:::note
Some operations require authentication. Make sure to obtain a JWT token first using the login mutation.
:::
---
title: Filter Athletes (GraphQL)
description: Advanced filtering and search operations for athletes
---

## Filter Athletes

Advanced filtering capabilities for searching and querying athletes based on multiple criteria.

---

## Available Filters

### Filter by Team

Search for all athletes from a specific academy or team.

**Query:**
```graphql
query FilterByTeam {
  filterAthletesByTeam(team: "Gracie Barra") {
    id
    name
    lastName
    nickname
    team
    belt
    nationality
  }
}
```

**Example Teams:**
- Alliance
- Gracie Barra
- Atos
- Checkmat
- Dream Art
- GF Team

---

### Filter by Belt Level

Get athletes filtered by their belt ranking.

**Query:**
```graphql
query FilterByBelt {
  filterAthletesByBelt(belt: "Black Belt") {
    id
    name
    lastName
    team
    belt
    achievements
  }
}
```

**Available Belts:**
- White Belt
- Blue Belt
- Purple Belt
- Brown Belt
- Black Belt

---

### Filter by Nationality

Search athletes by their country of origin.

**Query:**
```graphql
query FilterByNationality {
  filterAthletesByNationality(nationality: "Brazilian") {
    id
    name
    lastName
    nationality
    team
    belt
  }
}
```

**Popular Nationalities:**
- Brazilian
- American
- Japanese
- French
- Portuguese

---

### Search by Name

Search athletes by first name or last name.

**Query:**
```graphql
query SearchByName {
  searchAthletesByName(name: "Roger") {
    id
    name
    lastName
    nickname
    team
    belt
  }
}
```

**Note:** Search is case-insensitive and matches partial names.

---

### Filter by Weight Category

Get athletes in a specific weight division.

**Query:**
```graphql
query FilterByCategory {
  filterAthletesByCategory(category: "Middle") {
    id
    name
    lastName
    weight
    category
    team
  }
}
```

**Weight Categories:**
- Rooster
- Light Feather
- Feather
- Light
- Middle
- Medium Heavy
- Heavy
- Super Heavy
- Ultra Heavy

---

## Combined Filters

### Multiple Criteria Example

While GraphQL doesn't have a built-in "AND" filter in this API, you can fetch data and combine filters client-side:

**Step 1: Get all black belts**
```graphql
query GetBlackBelts {
  filterAthletesByBelt(belt: "Black Belt") {
    id
    name
    lastName
    team
    nationality
    belt
  }
}
```

**Step 2: Filter by team on client-side**

Process the results to show only Alliance black belts.

---

## Pagination with Filters

Combine pagination with your queries for better performance:

**Query:**
```graphql
query FilterWithPagination {
  filterAthletesByTeam(team: "Alliance") {
    id
    name
    lastName
    belt
  }
}
```

**Note:** For explicit pagination control, use the main `athletes` query with filters applied client-side.

---

## Sorting Results

Results are typically returned in the order they were created. For custom sorting, process results on the client-side.

**Example client-side sort (JavaScript):**
```javascript
const sortedByName = athletes.sort((a, b) => 
  a.name.localeCompare(b.name)
);
```

---

## Search Best Practices

### 1. Use Specific Queries

Instead of fetching all athletes and filtering client-side, use specific queries:

**❌ Not Recommended:**
```graphql
query {
  athletes {
    # ... fetch all then filter client-side
  }
}
```

**✅ Recommended:**
```graphql
query {
  filterAthletesByTeam(team: "Alliance") {
    # ... fetch only what you need
  }
}
```

### 2. Request Only Needed Fields

Optimize by selecting only the fields you need:
```graphql
query OptimizedQuery {
  filterAthletesByTeam(team: "Alliance") {
    id
    name
    lastName
    # Only request fields you'll use
  }
}
```

### 3. Case Sensitivity

All text searches are case-insensitive:
```graphql
# These all work the same:
searchAthletesByName(name: "roger")
searchAthletesByName(name: "Roger")
searchAthletesByName(name: "ROGER")
```

---

## Real-World Examples

### Example 1: Find All Alliance Black Belts
```graphql
query AllianceBlackBelts {
  filterAthletesByTeam(team: "Alliance") {
    id
    name
    lastName
    belt
    achievements
  }
}
```

Then filter for `belt === "Black Belt"` on client-side.

### Example 2: Search Brazilian Athletes
```graphql
query BrazilianAthletes {
  filterAthletesByNationality(nationality: "Brazilian") {
    id
    name
    lastName
    team
    belt
    weight
    category
  }
}
```

### Example 3: Find Athletes by Partial Name
```graphql
query FindGordon {
  searchAthletesByName(name: "Gor") {
    id
    name
    lastName
    nickname
    team
  }
}
```

Returns athletes with "Gor" in their name (e.g., Gordon Ryan).

---

## Performance Tips

1. **Fetch specific data**: Use filters instead of fetching all athletes
2. **Select only needed fields**: Don't request fields you won't use
3. **Implement client-side caching**: Cache frequent queries
4. **Use pagination**: For large datasets, implement pagination

---

:::tip[Try it in Playground]
Experiment with different filter combinations in the [GraphQL Playground](/en/gralphql/playground)
:::

:::note[Combining Filters]
For complex queries combining multiple filters, fetch the data with the most restrictive filter first, then apply additional filters client-side.
:::

:::caution[Performance]
Filtering large datasets without pagination may impact performance. Consider implementing pagination for queries returning many results.
:::
# Data Model: AI-Powered Grocery List Generator

## Entities

### GroceryList

- `id`: INTEGER (Primary Key)
- `name`: TEXT
- `created_at`: DATETIME

### GroceryItem

- `id`: INTEGER (Primary Key)
- `list_id`: INTEGER (Foreign Key to GroceryList)
- `name`: TEXT
- `quantity`: INTEGER
- `is_checked`: BOOLEAN

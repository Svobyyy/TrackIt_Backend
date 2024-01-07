# Backend

Rest API for my [Mobile Calories Application](https://www.google.com)

## How to use 

![Static Badge](https://img.shields.io/badge/npm-red)

```bash 
# Install dependencies

npm install
```

```bash
# Run the application

npm run dev
```
### Example
```javascript
// Example: Get Products which includes a word 'prot' in their name.

fetch('http://localhost:3005/products/prot', {
  method: 'GET'
})
```

## Technologies

- **Node.js:** A JavaScript runtime for building scalable network applications.
- **MongoDB:** A NoSQL database for storing and retrieving data efficiently.
- **Express:** A fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose:** An Object Data Modeling library for MongoDB and Node.js.


## Key Features

### Dates

- Get data of a specific Date Document
- Add a Product to a Date with a Quantity and Time [ Breakfast, Lunch, Dinner, Snacks ]
- Remove a Product from a Date
- Update Product's Quantity, Date, or Time

### Products

- Find Products by a Name
- Find a Product by a Barcode
- Add a Product to a Collection
- Delete a Product by an ID
- Update a Product by an ID
  





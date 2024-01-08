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

- **Node.js** 
- **MongoDB** 
- **Express** 
- **Mongoose**

## Key Features

### Dates

- Get data of a :Date Document or Create the Date
  
  * `/date/:date` (GET)
    
- If it exists, Update Product's Quantity, Date, or Time else Add the Product to the Date with the Quantity and Time <br>
  [ Breakfast, Lunch, Dinner, Snacks ]
  
  * `/date/:date` (POST)
    
- Remove a Product from a Date with an :Id
  
  * `/date/:id/:when` (DELETE)

### Products

- Find Products which includes a :Name

  * `/products/:name` (GET)

- Find a Product by a :Barcode

  *  `/product/barcode/:barcode` (GET)
  
- Add a Product to a Collection

  * `/product` (POST)
  
- Delete a Product by an ID

  * `/product/:id` (DELETE)
  
- Update a Product by an ID

  * `/product/:id` (PUT)
  





# Backend

Rest API for my [Mobile Calories Application](https://github.com/Svobyyy/CaloriesCounter).

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

- Retrieves data from a :Date or create the new Date.
  
  * `/date/:date` (GET)

- If it exists,It updates Product's Quantity, Date, or Time otherwise, add the Product to the Date with the Quantity and Time. <br>[ Breakfast, Lunch, Dinner, Snacks ]
  
  * `/date/:date` (POST)
    
- Deletes Products based on the Date and :Id.
  
  * `/date/:id/:when` (DELETE)

### Products

- Finds Products that include a :Name.

  * `/products/:name` (GET)

- Finds a Product by a :Barcode.

  *  `/product/barcode/:barcode` (GET)
  
- Adds a Product to a Collection.

  * `/product` (POST)
  
- Deletes a Product using an ID.

  * `/product/:id` (DELETE)
  
- Updates a Product using an ID.

  * `/product/:id` (PUT)
  





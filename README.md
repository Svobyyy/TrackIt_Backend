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

- Retrieve data from a :Date or create the new Date.
  
  * `/date/:date` (GET)

- If it exists, update Product's Quantity, Date, or Time otherwise, add the Product to the Date with the Quantity and Time. <br>[ Breakfast, Lunch, Dinner, Snacks ]
  
  * `/date/:date` (POST)
    
- Delete Products based on the Date and :Id.
  
  * `/date/:id/:when` (DELETE)

### Products

- Find Products that include a :Name.

  * `/products/:name` (GET)

- Find a Product by a :Barcode.

  *  `/product/barcode/:barcode` (GET)
  
- Add a Product to a Collection.

  * `/product` (POST)
  
- Delete a Product using an ID.

  * `/product/:id` (DELETE)
  
- Update a Product using an ID.

  * `/product/:id` (PUT)
  





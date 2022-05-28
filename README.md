# NoSQL ECOMMERCE WEBSITE PROJECT
#### Lu Zhou

## 1. Acknowledgement
- This project is inspired by the YouTube shopping cart tutorial by Basir [React & Redux Tutorial](https://www.youtube.com/watch?v=nKyrXWH5XLM&t=10140s)
- The adidas product catalog database is downloaded from [data world](https://data.world/data-hut/product-data-from-adidas)

## 2. Database
- Dataset preprocessing
-- Delete unwanted columns from dataset
-- Fetch image from the Url in images column and save into local folder "images"
-- Generate new columns availableSizes which include sizes of products
-- Save the dataset into JSON format
-- The data.json and images are already saved in this folder
- MongoDB
-- Install [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) to your terminal.
-- Open terminal and run command:
-- mongoimport --jsonArray --db adidas --collection products --file path_to_your_file

## 3. React App
- If you are not using local MongoDB
-- Edit process.env.MONGODB_URL || path to you database
- Open terminal and run command:
-- npm install
-- npm run server
-- open http://localhost:5000/api/products to check whether your are successfully connected to intended database
- Open a new terminal
-- npm start
-- open http://localhost:3000/admin to explore the shopping cart

## 4. Website Features
- Main page
-- All products and cart items on the side
-- Display product details when press the image or title of the product
-- Add to cart and remove item from cart
-- Press proceed and enter shopper's info to place order
-- Display order details when press submit button

- Admin
-- This is design for the administrator to perform CRUD action to products from frontend to backend
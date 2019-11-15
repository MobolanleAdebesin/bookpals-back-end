# API Project 

## Purpose 

The purpose of this project was to build an API from beginning to end. 

## Description 

Using data pulled from the NY Times API, I constructed and seeded a MongoDB database. 
This API includes information regarding, authors, titles, isbn numbers, 
and publishing companies for top rated books and novels. 
This API has CRUD functionality and follows the RESTful (Representational State Transfer) 
architectural style. This means that along providing users the opportunity to create, 
update, and delete data, the API, is built based on specific, well-documented guidelines.

## Technologies 
- JavaScript 
- Mongoose 
- Express.js 
- Node.js 
- MongoDB
- Heroku 

## Paths: 

Below I have provided information to naviagate this API: 

Route: https://bola-api.herokuapp.com/books/
Description: Following this route will return data for the first 20 books on 
the NY Times Bestseller List. 

Route: https://bola-api.herokuapp.com/books/title/insert-book-title-here
Example: https://bola-api.herokuapp.com/books/title/1,000 PLACES TO SEE BEFORE YOU DIE
Description: In the example above,the route will return data for the book '1000 PLACES TO SEE BEFORE YOU DIE'. 
Replacing this title with any of the titles of recognized by the database will return information about that specific book. 

Route: https://bola-api.herokuapp.com/books/author/insert-author-name-here
Example: https://bola-api.herokuapp.com/books/author/Sophia Amoruso
Description: In the example above, the route will return data for books written by the author Sophia Amoruso. 
Replacing this title with any of the titles in the database will return information about books written by that specific author. 

Route: https://bola-api.herokuapp.com/books/publisher/insert-publisher-here
Example: https://bola-api.herokuapp.com/books/publisher/Berkley
Description: In the example above, the route will return data for books published by that company. 
Replacing this publisher with any publisher in the database will return information about books published by that 
companies. 

## Instructions for Use 
1. Fork and clone repository 
2. Inside the root directory run: 
- npm init -y 
- npm install express mongoose body-parser 
3. Code! 

## Deployed Site 

The deployed site can be found [here](https://bola-api.herokuapp.com/books/).

# Issues 

If there are any issues or suggestions for ways that I can improve my project please submit them [here](https://github.com/MobolanleAdebesin/json-api-build/new/master)!




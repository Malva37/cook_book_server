# CookBook

This is the service side of project "CookBook" with a CREATE, READ, UPDATE methods.
The application is basically a hierarchical tree of recipes, uses Node.js + MySQL + Express for REST APIs.


# stapes to run the project

1. import express, body-parser and cors modules:
    -express is for building the Rest apis,
    -body-parser helps to parse the request and create the req.body object,
    -cors provides Express middleware to enable CORS with various options.

2. upply data base dumb `db_recipes_dump.sql`.

3. run the app with command: `node app`.
 

# Project Structure

– config.js exports configuring parameters for MySQL connection & Sequelize.
– express web server in app.js where we configure CORS, initialize & run Express REST APIs.
– next, we add configuration for MySQL database in models/index.js, create Sequelize data model in models/tutorial.model.js.
– recipe controller in controllers.
– routes for handling all CRUD operations in recipe.routes.js.



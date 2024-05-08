## Project Setup Steps

  - npm init
  - install some packages ( express, body-parser, nodemon)
  - README.md file for keep track 
  - Create a src folder where we put all our directories ( models, repository, services, controller, middlewares, utils)
  - index.js file in src foler which consist the server setup.
  - install package (mysql2, sequelize, sequelize-cli) for ORM of database

  ```
   - npx sequelize init ( create a foler like seeders, config(need to setup this), models, migrations)
   - npx sequelize db:create ( will create a database named as in config.json file)
   - npx sequelize model:generate --name:<tableName> --attributes <col1Name>:<datatype>,<col2Name>:<datatype>.. and so on
   this will create a table for us in javascript file 
   - npx sequelize db:migrate will create this same table in our mysql server. after migrating changes.
   
  ```
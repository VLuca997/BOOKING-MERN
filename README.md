# PROGETTO BOOKING-APP:

# STACK MERN: Mongo-Express-React-Node

Front-end: Bootstrap

# INIZIALIZZAZIONE PROGETTO:

# General-Folder:
    - npm init -y
    - npm i express


# package.json:
    -  "type": "module", // aggiunto da noi per express

    -   "scripts": {
        "start": "nodemon index.js"
        },


- npm start

Install Node.js:
-  npm i nodemon
*  index.js


# MONGO-DB:
{Key in file .env}
-  npm i mongoose



# LIBRERIE:

- BCRYPT :  npm i bcryptjs
- JWT :     npm i jsonwebtoken


# API CHECK CON POSTMAN:
- Routes:
- POST: localhost:8800/api/auth/login
- POST: localhost:8800/api/auth/register
- POST: localhost:8800/api/rooms/ID-STANZA
- POST: localhost:8800/api/hotels

- GET: localhost:8800/api/hotels
- GET: localhost:8800/api/hotels/ID-HOTEL
- GET: localhost:8800/api/hotels/countByCity?cities=Rome,London
- GET: localhost:8800/api/users/checkadmin/ID-USER-isAdmin
- DELETE: localhost:8800/api/hotels/ID-HOTEL
- DELETE: localhost:8800/api/rooms/ID-STANZA/ID-HOTEL




# REACT:
npx create-react-app .
npm i
npm install react-bootstrap bootstrap
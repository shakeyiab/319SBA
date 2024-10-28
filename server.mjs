import express from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import db from '../db/conn.mjs';


// Initialize express into a variable
const app = express();
const PORT = 3000;

//Middleware

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
//Use at least three different data collections within the database (such as users, posts, or comments).
//Create GET routes for all data that should be exposed to the client, 
//using appropriate query commands to retrieve the data from the database.

// get all teams 
router.get('/', (req, res) => {
    res.json(teams);

  })
  //// get all favteams
  router.get('/', (req, res) => {
    res.json(favTeams);
  })
  // get all scores
   router.get('/', (req, res) => {
    res.json(scores);
  })


//





//App.listen should ALWAYS be the last thing in your server
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
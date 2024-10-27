import express from 'express';

// Initialize express into a variable
const app = express();
const PORT = 3000;

//Middleware
// middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

//Routes - order of routes is most specific --> least specific
//first arg is path - always in quotes
app.get('/', (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

//App.listen should ALWAYS be the last thing in your server
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
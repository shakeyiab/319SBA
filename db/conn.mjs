import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

//Create connection string
let connectionString = process.env.atlasURI || 'mongodb+srv://shakeyiabartell:<Jaliyah1!>@cluster0.yahrf.mongodb.net/';

const client = new MongoClient(connectionString);

// Variable to hold connection info
let conn;

try {
  // Try to connect to client
  conn = await client.connect();
  console.log(`MongoDB is connected`);
} catch (err) {
  console.error(err);
}

let db = conn.db('');

export default db;
import { MongoClient } from 'mongodb';

async function main() {
   const uri = 'mongodb+srv://shakeyiabartell:<Jaliyah1!>@cluster0.yahrf.mongodb.net//sample_airbnb?retryWrites=true&w=majority';
   const client = new MongoClient(uri);
   conn = await client.connect();
   try {
    await client.connect();
    
   } catch (e) {
    console.error(e);
   }finally{
    await client.close();
   }
 }
 main().catch(console.error);
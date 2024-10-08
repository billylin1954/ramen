import { MongoClient } from "mongodb";
const uri = "mongodb+srv://billylin1954:<Cracknut4>@cluster0.rrsqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('billCo');
    const movies = database.collection('stuff');
    const query = { title: 'example' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);


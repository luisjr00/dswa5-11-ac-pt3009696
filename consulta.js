const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url =
   'mongodb://dswa5:dswa5@clusterdswa5-shard-00-00.r9mcd.mongodb.net:27017,clusterdswa5-shard-00-01.r9mcd.mongodb.net:27017,clusterdswa5-shard-00-02.r9mcd.mongodb.net:27017/ClusterDSWA5?ssl=true&replicaSet=atlas-q27y5k-shard-0&authSource=admin&retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'ifsp';
const user = 'Luís Antônio Nascimento Júnior';

async function main() {
   console.log('Aluno:', user);
   // Use connect method to connect to the server
   await client.connect();
   console.log('Servidor conectado com sucesso !');
   const db = client.db(dbName);
   const collection = db.collection('contatos');

   // the following code examples can be pasted here...
   const findResult = await collection.find({}).toArray();
   console.log('Foram encontrados os seguintes docs:', findResult);
   return 'done.';
}

main()
   .then(console.log)
   .catch(console.error)
   .finally(() => client.close());

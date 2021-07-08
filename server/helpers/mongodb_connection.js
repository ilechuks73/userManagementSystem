const Mongoclient = require ('mongodb').MongoClient
const dotenv = require('dotenv')

dotenv.config((path = "../.env"));

const client = new Mongoclient(process.env.MONGODB_CONNECTION_URL, { useUnifiedTopology: true })


const mongodb  = async (query)=>{
  await client.connect()
  query(client)
  
}

module.exports = mongodb
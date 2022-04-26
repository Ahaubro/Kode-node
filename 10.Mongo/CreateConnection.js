import {MongoClient} from "mongodb";

const url = "mongodb://localhost:27017"

const dbName = "videos";

const client = await MongoClient.connect(url);

console.log(client)
const db = client.db(dbName)

export default {
    tutorials: db.getCollection("tutorials")
}
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import Usuarios from "../models/artist";
// import {schemaUser} from "../schema/user"

export const collections: { usuarios?: mongoDB.Collection<Usuarios> } = {};

export async function connectToDatabase() {
  // Pulls in the .env file so it can be accessed from process.env. No path as .env is in root, the default location
  dotenv.config();

  // Create a new MongoDB client with the connection string from .env
  const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

  // Connect to the cluster
  await client.connect();

  // Connect to the database with the name specified in .env
  const db = client.db(process.env.DB_NAME);

  // Apply schema validation to the collection
//   await applySchemaValidation(db);

  // Connect to the collection with the specific name from .env, found in the database previously specified
  const usuariosCollection = db.collection<Usuarios>(
    process.env.USUARIOS_COLLECTION_NAME
  );

  // Persist the connection to the Games collection
  collections.usuarios = usuariosCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${usuariosCollection.collectionName}`
  );
}

// // Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Game model, even if added elsewhere.
// // For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
// async function applySchemaValidation(db: mongoDB.Db) {
//     // Try applying the modification to the collection, if the collection doesn't exist, create it
//    await db.command({
//         collMod: process.env.USUARIOS_COLLECTION_NAME,
//         // validator: schemaUser
//     }).catch(async (error: mongoDB.MongoServerError) => {
//         if (error.codeName === 'NamespaceNotFound') {
//             await db.createCollection(process.env.USUARIOS_COLLECTION_NAME);
//         }
// });
// }

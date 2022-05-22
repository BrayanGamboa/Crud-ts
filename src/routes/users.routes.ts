import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import { createValidator } from "express-joi-validation";
import { userSchema } from "../schema-joi/user-schema-joi";

export const users = express.Router();

users.use(express.json());

const validator = createValidator();

users.get("/", async (_req: Request, res: Response) => {
  try {
    const usuarios = await collections.usuarios.find({}).toArray();
    res.status(200).send(usuarios);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

users.get("/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id;
  try {
    // _id in MongoDB is an objectID type so we need to find our specific document by querying
    const query = { _id: new ObjectId(id) };
    const album = await collections.usuarios.findOne(query);

    if (album) {
      res.status(200).send(album);
    } else {
      res
      .status(204)
      .send(`"No Content" - Artist related to id not found: ${req.params.id}`);
    }
  } catch (error) {
      res.status(409).send(error.message);
  }
});

users.post(
  "/",
  validator.body(userSchema),
  async (req: Request, res: Response) => {
    try {
      const artist = req.body;
      const result = await collections.usuarios.insertOne(artist);

      result
        ? res
            .status(201)
            .send(
              `Successfully created a new album with id ${result.insertedId}`
            )
        : res.status(500).send("Failed to create a new album.");
    } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
    }
  }
);

users.put(
  "/:id",
  validator.body(userSchema),
  async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
      const updated = req.body;
      const query = { _id: new ObjectId(id) };
      // $set adds or updates all fields
      const result = await collections.usuarios.updateOne(query, {
        $set: updated,
      });

      result
        ? res.status(200).send(`Successfully updated album with id ${id}`)
        : res.status(304).send(`album with id: ${id} not updated`);
    } catch (error) {
      console.error(error.message);
      res.status(409).send(error.message);
    }
  }
);

users.delete("/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const result = await collections.usuarios.deleteOne(query);

    if (result && result.deletedCount) {
      res.status(200).send(`Successfully removed album with id ${id}`);
    } else if (!result) {
      res.status(409).send(`Conflict - Failed to remove album with id ${id}`);
    } else if (!result.deletedCount) {
      res.status(204).send(`album with id ${id} does not exist`);
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});

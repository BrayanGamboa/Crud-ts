import express, { Request, Response } from "express";
import auth from "../firebase/config/auth";
import { createValidator } from "express-joi-validation";
import { authSchema } from "../schema-joi/login-schema-joi";
export const authRouter = express.Router();
authRouter.use(express.json());
const validator = createValidator();

authRouter.post(
  "/createUser",
  validator.body(authSchema),
  async (_req: Request, res: Response) => {
    try {
      const { email, password } = _req.body;
      const result = await auth.createUser(email, password);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);

authRouter.post(
  "/logIn",
  validator.body(authSchema),
  async (_req: Request, res: Response) => {
    try {
      const { email, password } = _req.body;
      const result = await auth.logIn(email, password);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);

export default authRouter;

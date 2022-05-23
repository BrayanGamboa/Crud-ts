import { initializeApp } from "firebase/app";
import * as dotenv from "dotenv";
import firebaseConfig from "./config-key.json";
import { ServiceAccount } from "firebase-admin";
import admin from "firebase-admin";
import serviceAccount from "../service-account-key.json";

dotenv.config();

const app = initializeApp(firebaseConfig);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});

export default { app, admin };

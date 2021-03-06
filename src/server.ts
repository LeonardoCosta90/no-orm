import express from "express";

import "./database/runMigrations"

import { router } from "./router"

const app = express();
app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is running omn PORT 3000"));
import express from "express";

import "./database/runMigrations"

const app = express();

app.listen(3000, () => console.log("Server is running omn PORT 3000"));
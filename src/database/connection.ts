import { Pool } from "pg";

const createConnection = async () => {
  const client = new Pool({
    host: "localhost",
    user: "postgres",
    password: "123",
    database: "no-orm"
  })

  await client.connect();
  return client;
}

export { createConnection };
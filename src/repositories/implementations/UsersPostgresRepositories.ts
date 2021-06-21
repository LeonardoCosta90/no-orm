import { Pool } from "pg";
import { User } from "../../entities/User";
import { IUsersRepositories } from "../IUsersRepositories";

import { createConnection } from "../../database/connection"

class UsersPostgresRepositories implements IUsersRepositories {
  private client: Pool;

  constructor() {
    createConnection().then(connection => (this.client = connection));
  }
  async create({ id, name, email }: User): Promise<void> {
    await this.client.query("INSERT INTO USERS(ID, NAME, EMAIL) VALUES($1, $2, $3)",
      [id, name, email]
    )
  }

}

export { UsersPostgresRepositories };
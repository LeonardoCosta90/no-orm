import path from 'path';
import fs from 'fs';

import { createConnection } from './connection';

(async () => {

  const connection = await createConnection();

  const fileDatabaseDir = path.join(__dirname, "migrations");

  fs.readdir(fileDatabaseDir, (err, files) => {
    console.log(files);
  })
})();
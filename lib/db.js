import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "multistep",
  password: "postgresp",
  port: 5432,
});

export default pool;
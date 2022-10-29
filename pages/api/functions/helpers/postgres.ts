import * as Pool from 'pg';
const pool = new Pool.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false,
});

module.exports = { pool: pool };
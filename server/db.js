const POOL = require("pg").Pool;
const pool = new POOL(
    {
        user: "postgres",
        host: "localhost",
        port: 5432,
        password: "8896",
        database: "moo",
    }
);

module.exports = pool;


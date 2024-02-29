// Importing MySQL dependencies from the package.json file
import mysql from 'mysql2';

// Importing the config function from the dotenv package in the package.json file
import { config } from 'dotenv';

// Configuring environment variables
config();

// Creating a MySQL pool for database connection
const pool = mysql.createPool({
    // Extracting host, database name, user, and password from environment variables
    host: process.env.MYSQL_ADDON_HOST,
    database: process.env.MYSQL_ADDON_DB,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD
}).promise();

// Exporting the database connection pool
export { pool };

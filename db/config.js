const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    development: {
        dialect: process.env.DB_DIALECT || 'mariadb',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10) || 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        dialectOptions: {},
        migrationStorageTableName: 'sequelize_meta',
    },
    test: {
        dialect: process.env.DB_DIALECT || 'mariadb',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10) || 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.TEST_DB_NAME,
        migrationStorageTableName: 'sequelize_meta',
    },
    production: {
        dialect: process.env.DB_DIALECT || 'mariadb',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10) || 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        dialectOptions: {},
        migrationStorageTableName: 'sequelize_meta',
    },
}
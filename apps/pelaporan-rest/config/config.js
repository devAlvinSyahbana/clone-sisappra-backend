require('dotenv').config();

module.exports = {
    development: {
        use_env_variable: true,
        db: {
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT
        },
        services_internal: {
            cdn: process.env.SISAPPRA_UPLOADER_API_URL
        }
    },
    test: {
        use_env_variable: true,
        db: {
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT
        },
        services_internal: {
            cdn: process.env.SISAPPRA_UPLOADER_API_URL
        }
    },
    production: {
        use_env_variable: true,
        db: {
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT
        },
        services_internal: {
            cdn: process.env.SISAPPRA_UPLOADER_API_URL
        }
    }
};

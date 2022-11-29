module.exports = {
    client: "mysql",
    connection: {
        host: process.env.SQL_HOST || "127.0.0.1",
        user: process.env.SQL_USER || "root",
        password: process.env.SQL_PWD || "root",
        database: process.env.SQL_DB || "coder_ecommerce",
    },
    pool: { min: 0, max: 7 }
}
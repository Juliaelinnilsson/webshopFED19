//if (process.env.NODE_ENV !== "production") 
if (process.env.NODE_ENV !== 'production') require('dotenv').config({ path: "./.env" });
require('dotenv').config()

const config = {
    databaseURL: process.env.DATABASE,
    mail: process.env.MAIL
}

module.exports = config;
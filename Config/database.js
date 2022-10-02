const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    database : process.env.DATABASE,
    password : process.env.password,
    port : process.env.DB_PORT
});

connection.connect((error, result) => {
    if (error) {
        console.log(error.message)
    } else {
        // console.log(result)
    }
})

module.exports = connection
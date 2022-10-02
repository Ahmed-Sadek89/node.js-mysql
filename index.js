const express = require('express');
const body_parser = require('body-parser').urlencoded({extended: true});
const app = express();
const groceryRoute = require('./Routes/Grocery')
require('dotenv').config()

class Server{
    constructor() {
        this.setupConfig();
        this.importRoutes();
        this.startServer();
    }

    setupConfig() {
        app.use(express.json());
        app.use(body_parser);
    }

    importRoutes() {
        app.get('/', (req, res) => {
            res.write(`<h1>hello learning node.js + MySQL with ${process.env.AHMED_SADEK}</h1>`);
            res.end()
        })
        app.use('/grocery', groceryRoute)
    }

    startServer() {
        app.listen(4000, () => console.log('SERVER IS WORKED ON PORT ', 4000))
    }
}

new Server();
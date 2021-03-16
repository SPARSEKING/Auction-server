const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const keys = require('./config/keys.js');
const cors = require("cors");
const userRoute = require('./routes/users.route');

const PORT = process.env.PORT ?? 3000;
const app = express();

async function start() {
    try {
        await mongoose.connect( keys.mongoURI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
        })  

    } catch(e) {
        console.log(e)
    }

    app.use(cors());

    app.use(bodyParser.json());

    app.use('/', userRoute);

    app.listen(PORT, () => {
        console.log(`Server has been started on port ${PORT}...`);
    })
}

start();


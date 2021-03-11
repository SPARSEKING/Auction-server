const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const keys = require('./config/keys.js');
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

        app.use(bodyParser.json());

        app.use('/auth', userRoute);

        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}...`);
        })
    } catch(e) {
        console.log(e)
    }
}

start();


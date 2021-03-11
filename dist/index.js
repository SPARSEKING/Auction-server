"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const keys = require('./config/keys.ts');
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const app = express();
// Настройка подключения к бд
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose.connect(keys.mongoURI, {
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
                useCreateIndex: true,
            });
            app.use(bodyParser.json());
            app.listen(PORT, () => {
                console.log(`Server has been started on port ${PORT}...`);
            });
        }
        catch (e) {
            console.log(e);
        }
    });
}
start();

import express from 'express';
import Connection from './connection/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import Route from './routes/Route.js';
import DefaultData from './default.js'
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', Route);

const port = 8001;

app.listen(port, console.log(`Server running on port ${port}`));


Connection();
DefaultData();
import express from 'express'
import session from "express-session";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import PlacesController from "./controllers/places/places-controller.js";
import cors from 'cors';
import mongoose from "mongoose";
// mongoose.connect('mongodb+srv://vineeth8472:<password>@cluster0.sycmfry.mongodb.net/?retryWrites=true&w=majority');

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';


const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/trips';
mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(
    session({
        secret: "any string",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

app.use(cors())
app.use(express.json()) //Parse JSON from HTTP request body
PlacesController(app)
TuitsController(app)
HelloController(app)
UserController(app)
app.listen(4000);




import express, { Express } from 'express';
import dotenv from "dotenv";
import categoriesRouter from "./routes/categories.routes"
import transmissionsRouter from "./routes/transmissions.routes"
import brandsRouter from "./routes/brands.routes"
import carsRouter from "./routes/cars.routes"
import knex from "knex";
import {Model} from "objection";

// call function dotenv;
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

const knexInstance = knex({
    client: "pg",
    connection: {
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD,
        port: 5432
    }
})

Model.knex(knexInstance);

app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);
app.set("views", "src/views");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/cars", carsRouter);
app.use("/brands", brandsRouter);
app.use("/categories", categoriesRouter);
app.use("/transmissions", transmissionsRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Rest API Binar Car Rental"
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
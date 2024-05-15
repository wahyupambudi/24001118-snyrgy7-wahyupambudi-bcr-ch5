import express, { Express } from 'express';
import dotenv from "dotenv";
import carsRouter from "./routes/cars.routes"

// call function dotenv;
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use("/cars", carsRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Rest API Binar Car Rental"
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
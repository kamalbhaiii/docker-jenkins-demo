import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import UserSchema from './model.js';

dotenv.config()
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.get("/", (req,res)=>{
    res.status(200).send({
        status: 200,
        response: "OK",
        message: "Server is running."
    })
})

app.post("/signup", async (req,res)=>{
    const {name, password, email} = req.body;

    const newUser = new UserSchema({name, password, email})

    try{
        await newUser.save();

        res.status(200).send({
            status: 200,
            response:"OK",
            message:"New user has been created."
        })
    }
    catch(err){
        res.status(400).send({
            status: 400,
            response: "Failure",
            message: err.message
        })
    }
})

mongoose.connect(process.env.VITE_BACKEND_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.VITE_BACKEND_PORT, () => console.log(`Server Running on Port: http://localhost:${process.env.VITE_BACKEND_PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
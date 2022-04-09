import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/auth.js';
import './models/user.js';

const app = express();
const PORT = 5000;

app.use(express.json())

app.use(router);

const customMiddleware = ((req,res, next) => {
    console.log("Middleware Executed!!!!");
next();

})


app.get("/", (req,res)=>{
    res.send("Hello")
})

app.get("/login",customMiddleware, (req,res)=>{
    res.send("Hello")
})

app.listen(PORT, ()=>{
    console.log("SERVER DATABASE ON:", PORT) 
})



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://socialnetwork:socialnetwork@cluster0.8f1hh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL).then(()=>{
    console.log(`SERVER RUNNING ON: ${PORT}`)
})



import express from 'express';
import mongoose from 'mongoose';
import routerAuth from './routes/auth.js';
import routerPost from './routes/post.js';


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(routerAuth);
app.use(routerPost);

const CONECTIONURL = 'mongodb+srv://socialnetwork:socialnetwork@cluster0.8f1hh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONECTIONURL).then(()=>{
    console.log(`SERVER is connected to MongoDB from: ${PORT}`);
})

app.listen(PORT,() => {
    console.log("SERVER running on:", PORT )
});




import express,{ request, response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import TodoRoute from "./Routes/TodoRoute.js"
import cors from'cors'

const app=express();
app.use(express.json());

app.use(cors({
origin:'http://localhost:5173',
methods:['GET','POST','PUT','DELETE'],
allowedHeaders:['Content-Type'],
}));

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('welcome to TOdo app')
});

app.use('/List',TodoRoute)

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connect to the database');
        
    app.listen(PORT,()=>{
    console.log(`app is running..${PORT}`)
})

    })
    .catch(()=>{
        console.log(error);
    })

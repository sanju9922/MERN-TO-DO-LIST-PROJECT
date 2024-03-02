import express, { request, response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
import BookRoutes from "./routes/BookRoutes.js";


const app= express();

app.use(express.json());

// app.use(cors());

// app.use(cors({
//     origin : 'http://localhost:3000',
//     methods: ['GET','POST','PUT',"DELETE"],
//     allowedHeaders : ['Content-Type'],
// }))

app.get('/',(request,response)=>{
    console.log(request);
    console.log('hi');
    return response.status(234).send('hi welcome to mern stack')
})

app.use('/books',BookRoutes);


mongoose.connect(mongoDBURL).then(()=>{
    console.log('Database connected successfully');
    app.listen(PORT,()=>{
        console.log(`app is listening on port: ${PORT}`);
    });
}).catch((err)=>{
    console.log(err); 
   } 
);
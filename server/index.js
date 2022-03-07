
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv  from "dotenv"





import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const PORT = process.env.PORT || 6500;

mongoose.connect(process.env.CONNECTION_URL || 'mongodb+srv://zion:zion27@wisper.b7m61.mongodb.net/logbase?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
}) ;



mongoose.Collection('connected', () => {
  console.log('mongodb connected succesfuly');
});


app.listen(PORT, console.log(`server is running at ${PORT}`));
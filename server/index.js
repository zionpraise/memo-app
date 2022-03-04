
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

const PORT = process.env.PORT || 5500;

mongoose.connect(process.env.CONNECTION_URL , {
   useNewUrlParser: true,
   useUnifiedTopology: true
}) ;




mongoose.Collection('connected', () => {
  console.log('mongodb connected succesfuly');
});


app.listen(PORT, console.log(`server is running at ${PORT}`));
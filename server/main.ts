import * as mongoose from 'mongoose';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { router as userRoute } from './routes/userRoute';

dotenv.config();

const PORT = process.env.PORT;
const app: Express = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRoute)

app.listen(PORT, () => {
    runMongoDB();
    console.log(`Run ${PORT}`);
})

const runMongoDB = async () => {
    await mongoose.connect(process.env.MONGO_URL as string);

    console.log('MongoDB connected');
}
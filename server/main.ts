import * as mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.listen(PORT, () => {
    runMongoDB();
    console.log(`Run ${PORT}`);
})

const runMongoDB = async () => {
    await mongoose.connect(process.env.MONGO_URL as string);

    console.log('MongoDB connected');
}
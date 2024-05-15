import * as mongoose from 'mongoose';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { router as userRoute } from './routes/userRoute';
import { router as movieRoute } from './routes/movieRoutes';
import { Server } from 'socket.io';

dotenv.config();

const PORT = process.env.PORT;
const app: Express = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRoute);
app.use('/movie', movieRoute);

const server = app.listen(PORT, () => {
    runMongoDB();
    console.log(`Run ${PORT}`);
})

const io = new Server(server);

io.on('connection', (socket) => {
    console.log(socket, 'socket connected');
})

const runMongoDB = async () => {
    await mongoose.connect(process.env.MONGO_URL as string);

    console.log('MongoDB connected');
}
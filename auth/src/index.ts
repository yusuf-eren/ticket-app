import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
        console.log('Successfully connected to db');
    } catch (error) {
        console.log(error);
    }
};

start();

app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
});

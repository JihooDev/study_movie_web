const mongoose = require('mongoose');
const express = require('express');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Run ${PORT}`);
})

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res: any) => {
    console.log('DB Connection !!!')
}).catch((err: any) => {
    console.log(err.message, 'mongooess error');
});

console.log(PORT);
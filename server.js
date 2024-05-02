import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import router from './routes/usersRoute.js'

const app = express();

const PORT = process.env.PORT ;

await mongoose.connect(process.env.ATLAS_URI);

app.use('/users', router)

app.get('/', (req, res) => {
    res.send('Hello! (from Server)');
});



app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
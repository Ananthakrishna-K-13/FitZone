const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())
app.options('*',cors())

mongoose.connect(process.env.MONGO_URI).then(console.log('Connected to mongoDB'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth',require('./routes/auth'))
app.use('/api/favs',require('./routes/fav'))

app.listen(PORT,()=>console.log(`app listening on port ${PORT}`))
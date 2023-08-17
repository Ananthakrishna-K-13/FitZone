const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User')
const cors = require('cors')

const app = express();
app.options('*',cors())
mongoose.connect("mongodb://0.0.0.0:27017").then(console.log('Connected to mongoDB'));
app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/favs',require('./routes/fav'))

app.listen(5000,()=>console.log("app listening on http://localhost:5000"))
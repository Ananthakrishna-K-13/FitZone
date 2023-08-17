const mongoose = require('mongoose')
const {Schema} = mongoose
const User = require('./User')

const favSchema = new Schema({
    user: Schema.Types.ObjectId,
    exercise:String,
    name:String,
    equipment:String,
    bodyPart:String,
    target:String
})
module.exports = mongoose.model("Favourites",favSchema);
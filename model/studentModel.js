const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    gender:String,
    age:Number,
    email:String,
    phone:String,
    address:String,
    picture:String
})


const studentModel = mongoose.model('students', studentSchema);

module.exports = studentModel;
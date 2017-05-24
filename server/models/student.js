const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    email: {
        type: String,
        required: true
    },

    age: {
        type: Number
    }
})

const Student = mongoose.model('student', studentSchema)

module.exports = Student

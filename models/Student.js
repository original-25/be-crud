const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    studentId: Number,
    name: String,
    dob: Date,
    address: String
});

module.exports = mongoose.model("student", StudentSchema, "Students");
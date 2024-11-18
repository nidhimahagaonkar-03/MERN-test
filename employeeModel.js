const mongoose = require("mongoose");

// Define the Schema
const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    department: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female"], required: true },
    education: { type: String, required: true },
    dateOfJoining: { type: Date, required: true }
});

// Create the Model
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;

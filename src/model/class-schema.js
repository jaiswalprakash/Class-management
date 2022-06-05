const mongoose = require('mongoose');

const constant = require('../utils/constant');
const Schema = mongoose.Schema;

// Create Schema objects for User
const classSchema = new Schema({
    name:{
        type: String,
        trim: true,
        enum:constant.CLASS
    },
    id: {
        type: String,
        trim: true
    },
}, {
    timestamps: true
});



module.exports = mongoose.model(constant.MODEL_NAME.CLASS, classSchema); //Compiling schema to model
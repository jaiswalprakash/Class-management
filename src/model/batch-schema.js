const mongoose = require('mongoose');

const constant = require('../utils/constant');
const Schema = mongoose.Schema;

// Create Schema objects for batch
const batchSchema = new Schema({
    name:{
        type: String,
        trim: true,
        enum:constant.BATCH
    },
    id: {
        type: String,
        trim: true
    },
}, {
    timestamps: true
});



module.exports = mongoose.model(constant.MODEL_NAME.BATCH, batchSchema); //Compiling schema to model
const mongoose = require('mongoose');

const constant = require('./utils/constant');
//Connecting mongodb
mongoose.connect(constant.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (error) => {
    if (error) {
        console.log('MongoDB connection error', error);
    } else {
        console.log(`MongoDB connected successfully.`);
    }
});
const express = require('express');
const constant = require('./utils/constant');
let bodyParser = require('body-parser');
const cors = require('cors');
//Setting Server
const app = express();
const http = require('http');
const db = require('./db.js');

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors());


//Routes to Controller
app.use('/auth', require('./controller/auth-controller'));
app.use('/users', require('./controller/user-controller'));
app.use('/class',require('./controller/class-controller'));
app.use('/teacher-class',require('./controller/teacher-class-controller'));
app.use('/student-class',require('./controller/student-class-controller'));
app.use('/batch',require('./controller/batch-controller'));



app.listen(constant.PORT, () => {
    console.log(`Listening to the port ${constant.PORT}`);
})

const express = require('express');
const constant = require('./../utils/constant');
const userService = require('./../service/user-service');
const response = require('../utils/custom-response');
const route = express.Router();
const isAuthenticate = require('../service/token-service');


route.post('/', (req, res) => {
    userService.create(req.body).then((result) => {
        res.status(constant.HTML_STATUS_CODE.CREATED).json(response.success(constant.HTML_STATUS_CODE.CREATED, result));
    }).catch((error) => {
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR, { message: error.message }));
    });
});

route.get('/getStudent',isAuthenticate,(req, res)=>{
    userService.getStudent(req.user.role).then((result)=>{
      res.status(constant.HTML_STATUS_CODE.SUCCESS).json(response.success(constant.HTML_STATUS_CODE.SUCCESS,result))
    }).catch((error)=>{
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR),{message:error.message });
    })
});

route.get('/getInstructor',isAuthenticate,(req, res)=>{
    userService.getInstructor(req.user.role).then((result)=>{
      res.status(constant.HTML_STATUS_CODE.SUCCESS).json(response.success(constant.HTML_STATUS_CODE.SUCCESS,result))
    }).catch((error)=>{
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR),{message:error.message });
    })
});


module.exports = route;
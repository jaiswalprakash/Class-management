const express = require('express');
const constant = require('./../utils/constant');
const classService = require('./../service/class-service');
const response = require('../utils/custom-response');
const isAuthenticate = require('../service/token-service');
const route = express.Router();


route.post('/create',isAuthenticate, (req, res) => {
    classService.create(req.user.role,req.body).then((result) => {
        res.status(constant.HTML_STATUS_CODE.CREATED).json(response.success(constant.HTML_STATUS_CODE.CREATED, result));
    }).catch((error) => {
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR, { message: error.message }));
    });
});

route.get('/get',isAuthenticate, (req, res)=>{
    classService.get(req.user.role).then((result)=>{
      res.status(constant.HTML_STATUS_CODE.SUCCESS).json(response.success(constant.HTML_STATUS_CODE.SUCCESS,result))
    }).catch((error)=>{
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR),{message:error.message });
    })
});

route.patch('/update',isAuthenticate,(req, res)=>{
    classService.update(req.user.role,req.body).then((result)=>{
        res.status(constant.HTML_STATUS_CODE.SUCCESS).json(response.success(constant.HTML_STATUS_CODE.SUCCESS,result))
    }).catch((error)=>{
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR),{message:error.message });
    })
});

route.delete('/delete/:id',isAuthenticate, (req, res)=>{
    classService.delete(req.user.role,req.params.id).then((result)=>{
        res.status(constant.HTML_STATUS_CODE.SUCCESS).json(response.success(constant.HTML_STATUS_CODE.SUCCESS,result))
    }).catch((error)=>{
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR),{message:error.message });
    });
});



module.exports = route;
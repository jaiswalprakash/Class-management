const express = require('express');
const constant = require('./../utils/constant');
const studentClassService = require('./../service/student-class-service');
const response = require('../utils/custom-response');
const isAuthenticate = require('../service/token-service');
const route = express.Router();


route.post('/', isAuthenticate, (req, res) => {
    studentClassService.create(req.user.role, req.body).then((result) => {
        res.status(constant.HTML_STATUS_CODE.CREATED).json(response.success(constant.HTML_STATUS_CODE.CREATED, result));
    }).catch((error) => {
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR, { message: error.message }));
    });
});

route.get('/get', (req, res) => {
    studentClassService.get().then((result) => {
        res.status(constant.HTML_STATUS_CODE.SUCCESS).json(response.success(constant.HTML_STATUS_CODE.SUCCESS, result))
    }).catch((error) => {
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR), { message: error.message });
    })
});

route.get('/getByStudentId/:id', (req, res) => {
    studentClassService.getByStudentId(req.params.id).then((result) => {
        res.status(constant.HTML_STATUS_CODE.SUCCESS).json(response.success(constant.HTML_STATUS_CODE.SUCCESS, result))
    }).catch((error) => {
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR), { message: error.message });
    })
});

route.get('/getInstructorByClass/:classId', isAuthenticate, (req, res) => {
    console.log('reqparams', req.params.classId);
    studentClassService.getInstructorByClass(req.user.role, req.params.classId).then((result) => {
        res.status(constant.HTML_STATUS_CODE.SUCCESS).json(response.success(constant.HTML_STATUS_CODE.SUCCESS, result))
    }).catch((error) => {
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR), { message: error.message });
    })
});
route.post('/getBatchByclassInstructor', isAuthenticate, (req, res) => {
    console.log('reqparams', req.body);
    studentClassService.getBatchByclassInstructor(req.user.role, req.body).then((result) => {
        res.status(constant.HTML_STATUS_CODE.SUCCESS).json(response.success(constant.HTML_STATUS_CODE.SUCCESS, result))
    }).catch((error) => {
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR), { message: error.message });
    })
});



module.exports = route;
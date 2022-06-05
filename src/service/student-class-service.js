const studentClassDAO = require('./../dao/student-class-dao');
const constant = require('../utils/constant');

const studentClassService = {

    //API to signup
    create: (role, studentClassDetail) => {
        return new Promise((resolve, reject) => {
            if (role != 'ADMIN')
                return reject({ status: constant.HTML_STATUS_CODE.INVALID_DATA, message: constant.MESSAGE.USER.MESSAGE_UNAUTHORIZED_USER });

            studentClassDAO.checkExist(studentClassDetail.instructor, studentClassDetail.class, studentClassDetail.batch, studentClassDetail.student).then((data) => {
                if (data) {
                    reject({ status: constant.HTML_STATUS_CODE.INVALID_DATA, message: constant.MESSAGE.STUDENT_CLASS.ALREADY_EXIST });
                } else {
                    studentClassDAO.create(studentClassDetail).then((result) => {
                        resolve({ message: constant.MESSAGE.STUDENT_CLASS.CREATED });
                    }).catch((error) => {
                        reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });
                    });
                }
            });
        });
    },

    get: () => {
        return new Promise((resolve, reject) => {
            studentClassDAO.get().then((result) => {
                resolve(result);
            }).catch((error) => {
                reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });
            });
        });
    },
    getByStudentId: (id) => {
        return new Promise((resolve, reject) => {
            studentClassDAO.getByStudentId(id).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });
            });
        });
    },
    getInstructorByClass: (role, classId) => {
        return new Promise((resolve, reject) => {
            if (role != 'ADMIN')
                return reject({ status: constant.HTML_STATUS_CODE.INVALID_DATA, message: constant.MESSAGE.USER.MESSAGE_UNAUTHORIZED_USER });

            studentClassDAO.getInstructorByClass(classId).then((data) => {
                console.log('result--', data);
                resolve(data);
            }).catch(error => {
                reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });

            });
        });
    },
    getBatchByclassInstructor: (role,payload) => {
        return new Promise((resolve, reject) => {
            if (role != 'ADMIN')
                return reject({ status: constant.HTML_STATUS_CODE.INVALID_DATA, message: constant.MESSAGE.USER.MESSAGE_UNAUTHORIZED_USER });

            studentClassDAO.getBatchByclassInstructor(payload).then((data) => {
                console.log('result--', data);
                resolve(data);
            }).catch(error => {
                reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });

            });
        });
    }

}


module.exports = studentClassService;
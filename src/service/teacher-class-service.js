const teaacherClassDAO = require('./../dao/teacher-class-dao');
const constant = require('../utils/constant');

const teacherClassService = {

    //API to signup
    create: (role, teacherClassDetail) => {
        return new Promise((resolve, reject) => {
            if (role != 'ADMIN')
                return reject({ status: constant.HTML_STATUS_CODE.INVALID_DATA, message: constant.MESSAGE.USER.MESSAGE_UNAUTHORIZED_USER });

            teaacherClassDAO.checkExist(teacherClassDetail.instructor, teacherClassDetail.class, teacherClassDetail.batch).then((data) => {
                if (data) {
                    reject({ status: constant.HTML_STATUS_CODE.INVALID_DATA, message: constant.MESSAGE.TEACHER_CLASS.ALREADY_EXIST });
                } else {
                    teaacherClassDAO.create(teacherClassDetail).then((result) => {
                        resolve({ message: constant.MESSAGE.TEACHER_CLASS.CREATED });
                    }).catch((error) => {
                        reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });
                    });
                }
            });
        });
    },

    get: () => {
        return new Promise((resolve, reject) => {
            teaacherClassDAO.get().then((result) => {
                resolve(result);
            }).catch((error) => {
                reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });
            });
        });
    },
    getByInstructorId: (id) => {
        return new Promise((resolve, reject) => {
            teaacherClassDAO.getByInstructorId(id).then((result) => {
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

            teaacherClassDAO.getInstructorByClass(classId).then((data) => {
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

            teaacherClassDAO.getBatchByclassInstructor(payload).then((data) => {
                console.log('result--', data);
                resolve(data);
            }).catch(error => {
                reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });

            });
        });
    }

}


module.exports = teacherClassService;
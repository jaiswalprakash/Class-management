const classDAO = require('./../dao/class-dao');
const constant = require('../utils/constant');
const classService = {
    create: (role, classDetail) => {
        return new Promise((resolve, reject) => {
            if (role != 'ADMIN')
              return  reject({ status: constant.HTML_STATUS_CODE.INVALID_DATA, message: constant.MESSAGE.USER.MESSAGE_UNAUTHORIZED_USER });

            classDAO.checkExist(classDetail.name).then((data) => {
                if (data) {
                   return reject({ status: constant.HTML_STATUS_CODE.INVALID_DATA, message: constant.MESSAGE.CLASS.ALREADY_EXIST });
                } else {
                    classDAO.create(classDetail).then((result) => {
                        resolve({ message: constant.MESSAGE.CLASS.CREATED });
                    }).catch((error) => {
                        reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });
                    });
                }
            });
        });
    },

    get:(role) => {
        return new Promise((resolve, reject) => {
            if (role != 'ADMIN'){
                return reject({ status: constant.HTML_STATUS_CODE.INVALID_DATA, message: constant.MESSAGE.USER.MESSAGE_UNAUTHORIZED_USER });
            }
            classDAO.get().then((result) => {
                resolve(result);
                }).catch((error) => {
                        reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });
                });
            });
        },
    update:(role,classDetail)=>{
        return new Promise((resolve, reject) => {
            if (role != 'ADMIN')
              return  reject({ status: constant.HTML_STATUS_CODE.INVALID_DATA, message: constant.MESSAGE.USER.MESSAGE_UNAUTHORIZED_USER });
                    classDAO.update(classDetail).then((result) => {
                        resolve(result);
                    }).catch((error) => {
                        reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });
                    });
            });

    },
    delete:(role,id)=>{
        return new Promise((resolve, reject) => {
            if (role != 'ADMIN')
              return  reject({ status: constant.HTML_STATUS_CODE.INVALID_DATA, message: constant.MESSAGE.USER.MESSAGE_UNAUTHORIZED_USER });
             classDAO.delete(id).then((result) => {
                resolve(result);
                }).catch((error) => {
                    reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });
                });
            });

    },

}


module.exports = classService;
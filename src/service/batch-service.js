const batchDAO = require('./../dao/batch-dao');
const constant = require('../utils/constant');

const batchService = {

    create: (role, classDetail) => {
        return new Promise((resolve, reject) => {
            if (role != 'ADMIN')
              return reject({ status: constant.HTML_STATUS_CODE.INVALID_DATA, message: constant.MESSAGE.USER.MESSAGE_UNAUTHORIZED_USER });

            batchDAO.checkExist(classDetail.name).then((data) => {
                if (data) {
                    reject({ status: constant.HTML_STATUS_CODE.INVALID_DATA, message: constant.MESSAGE.BATCH.ALREADY_EXIST });
                } else {
                    batchDAO.create(classDetail).then((result) => {
                        resolve({ message: constant.MESSAGE.BATCH.CREATED });
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
            batchDAO.get().then((result) => {
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
              batchDAO.update(classDetail).then((result) => {
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
              batchDAO.delete(id).then((result) => {
                resolve(result);
                }).catch((error) => {
                    reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });
                });
            });

    },


}


module.exports = batchService;
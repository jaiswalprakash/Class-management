const userModel = require('../model/users-schema');
const utility = require('../utils/utilities');
const UserDAO = {
    create: (userDetail) => {
        let payload= {};
        if(userDetail.role== 'STUDENT')
        payload['id'] = `ST-${utility.getRandomString(3)}`;
        else if(userDetail.role== 'INSTRUCTOR')
        payload['id'] = `IN-${utility.getRandomString(3)}`;
        else if(userDetail.role== 'ADMIN')
        payload['id'] = `AD-${utility.getRandomString(3)}`;
        return new userModel({...payload,...userDetail}).save();
    },

    checkExist: (email) => {
        return userModel.findOne({ email });
    },
    comparePassword: (reqPassword, UserPassword) => {
        return reqPassword == UserPassword;
    },
    getById: (data) => {
        return userModel.findOne({ _id: data });
    },
    getStudent:()=>{
        return userModel.find({role:"STUDENT"});
    },
    getInstructor:()=>{
        return userModel.find({role:"INSTRUCTOR"});
    },

}

module.exports = UserDAO;
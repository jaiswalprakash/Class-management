const classModel = require('../model/class-schema');
const utility = require('../utils/utilities');
const classDAO = {
    create: (classDetail) => {
        return new classModel({
            name: classDetail.name,
            id: `CLS-${utility.getRandomString(3)}`
        }).save();
    },

    checkExist: (classname) => {
        return classModel.findOne({ name: classname });
    },
    get:()=>{
        return classModel.find({});
    },
    update:(bodyData)=>{
        return classModel.updateOne({id:bodyData.id},{$set:{name: bodyData.name}});
    },
    delete:(id)=>{
        return classModel.deleteOne({id:id});
    }
}

module.exports = classDAO;
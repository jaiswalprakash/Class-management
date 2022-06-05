const batchModel = require('../model/batch-schema');
const utility = require('../utils/utilities');
const classDAO = {
create: (batchDetail) => {
        return new batchModel({
            name: batchDetail.name,
            id: `BTH-${utility.getRandomString(3)}`
        }).save();
    },

    checkExist: (batchname) => {
        return batchModel.findOne({ name: batchname });
    },
    get:()=>{
        return batchModel.find({});
    },
    update:(bodyData)=>{
        return batchModel.updateOne({id:bodyData.id},{$set:{name: bodyData.name}});
    },
    delete:(id)=>{
        return batchModel.deleteOne({id:id});
    }
    
}

module.exports = classDAO;
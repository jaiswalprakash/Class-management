const teacherClassModel = require('../model/teacher-class-schema');
const utility = require('../utils/utilities');
const userModel = require('../model/users-schema');
const batchModel = require('../model/batch-schema');
const TeacherClassDAO = {
    create: (detail) => {
        return new teacherClassModel(
            {
                ...detail,
                id: `TC-${utility.getRandomString(3)}`
            }).save();
    },
    checkExist: (instrutorId, classId, batchId) => {
        return teacherClassModel.findOne({ instuctor:instrutorId, class:classId, batch:batchId });
    },
    get:()=>{
        return teacherClassModel.find({}).
        populate({
            path: 'class',
            select: { name: 1 }
        }).
        populate({
            path: 'batch',
            select: { name: 1 }
        }).
        populate({
            path: 'instructor',
            select: { name: 1 }
        });
    },
    getByInstructorId: (id) => {
        return studentClassModel.find({instructor:id}).
            populate({
                path: 'class',
                select: { name: 1 }
            }).
            populate({
                path: 'batch',
                select: { name: 1 }
            }).
            populate({
                path: 'instructor',
                select: { name: 1 }
            });
    },
    getInstructorByClass:async(classId)=>{
      let data = await teacherClassModel.distinct("instructor",{"class":classId});
       return userModel.find({'_id':{$in : data}}, {name:1,_id:1})
    },
    getBatchByclassInstructor:async(payload)=>{
        let data = await teacherClassModel.distinct("batch",payload);
         return batchModel.find({'_id':{$in : data}}, {name:1,_id:1})
      },

}

module.exports = TeacherClassDAO;
const studentClassModel = require('../model/student-class-schema');
const utility = require('../utils/utilities');
const userModel = require('../model/users-schema');
const batchModel = require('../model/batch-schema');
const TeacherClassDAO = {
    create: (detail) => {
        return new studentClassModel(
            {
                ...detail,
                id: `TC-${utility.getRandomString(3)}`
            }).save();
    },
    checkExist: (instrutorId, classId, batchId, studentId) => {
        console.log(instrutorId, classId, batchId, studentId);
        return studentClassModel.findOne({ instructor: instrutorId, class: classId, batch: batchId, student: studentId });

    },
    get: () => {
        return studentClassModel.find({}).
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
    getByStudentId: (id) => {
        return studentClassModel.find({student:id}).
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
    getInstructorByClass: async (classId) => {
        let data = await studentClassModel.distinct("instructor", { "class": classId });
        return userModel.find({ '_id': { $in: data } }, { name: 1, _id: 1 })
    },
    getBatchByclassInstructor: async (payload) => {
        let data = await studentClassModel.distinct("batch", payload);
        return batchModel.find({ '_id': { $in: data } }, { name: 1, _id: 1 })
    },

}

module.exports = TeacherClassDAO;
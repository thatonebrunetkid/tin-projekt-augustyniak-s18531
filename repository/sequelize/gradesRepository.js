const Sequelize = require('sequelize');

const Grades = require('../../model/sequelize/Grades');
const Student = require('../../model/sequelize/Student');
const Subject = require('../../model/sequelize/Subject');


exports.getGrades = () => {
    return Grades.findAll({
        include: [
            {
                model: Student,
                as: 'student'
            },
            {
                model: Subject,
                as: 'subject'
            }
        ]
    });
};

exports.getGradeById = (grdId) => {
    return Grades.findByPk(grdId,
        {
            include: [
            {
                model: Student,
                as: 'student'
            },
            {
                model: Subject,
                as: 'subject'
            }
        ]});
};

exports.createGrade = (data) => {
    console.log(JSON.stringify(data));

    return Grades.create({
        Grade: data.Grade,
        Date: data.Date,
        Comment: data.Comment,
        sub_id: data.sub_id,
        std_id: data.std_id
    });
};

exports.updateGrade = (grdId, data) => {
    return Grades.update(data, {where: {_id: grdId}});
}

exports.deleteGrade = (grdId) => {
    return Grades.destroy({
        where: {_id: grdId}
    });
}

exports.deleteManyGrades = (grdId) => {
    return Grades.find({_id: {[Sequelize.Op.in] : grdId}})
}
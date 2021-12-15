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

exports.getGradeById = (gradeId) => {
    return Grades.findByPk(gradeId, {include: [
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
        Subject_id: data.Subject_id,
        Student_id: data.Student_id
    });
};

exports.updateGrade = (gradeId, data) => {
    return Grades.update(data, {where: {_id: gradeId}});
}

exports.deleteGrade = (gradeId) => {
    return Grades.destroy({
        where: {_id: gradeId}
    });
}
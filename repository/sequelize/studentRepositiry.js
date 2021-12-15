const Subject = require('../../model/sequelize/Subject');
const Grades = require('../../model/sequelize/Grades');
const Student = require('../../model/sequelize/Student');

exports.getStudents = () => {
    return Student.findAll();
};

exports.getStudentById = (studentId) => {
    return Student.findByPk(studentId,
        {
            include: [{
                model:Grades,
                as: 'grades',
                include: [{
                    model: Subject,
                    as: 'subject'
                }]
            }]
        });
};

exports.createStudent = (newStudentData) => {
    return Student.create({
        Name: newStudentData.Name,
        Surname: newStudentData.Surname,
        Adress: newStudentData.Adress,
        ZipCode: newStudentData.ZipCode,
        BirthDate: newStudentData.BirthDate,
        PESEL: newStudentData.PESEL
    });
};

exports.updateStudent = (studentId, studentData) => {
    const Name = studentData.Name;
    const Surname = studentData.Surname;
    const Adress = studentData.Adress;
    const ZipCode = studentData.ZipCode;
    const BirthDate = studentData.BirthDate;
    const PESEL = studentData.PESEL;
    return Student.update(studentData, {where: {_id: studentId}});
};

exports.deleteStudent = (studentId) => {
    return Student.destroy({
        where: {_id: studentId}
    });
};
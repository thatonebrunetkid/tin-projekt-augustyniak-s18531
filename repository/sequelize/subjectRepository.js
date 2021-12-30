const Subject = require('../../model/sequelize/Subject');
const Grades = require('../../model/sequelize/Grades');
const Student = require('../../model/sequelize/Student');

exports.getSubjects = () => {
    return Subject.findAll();
};

exports.getSubjectById = (subId) => {
    return Subject.findByPk(subId,
        {
            include: [{
                model: Grades,
                as: 'grades',
                include: [{
                    model: Student,
                    as: 'student'
                }]
            }]
        });
};

exports.createSubject = (newSubjectData) => {
    return Subject.create({
        Name: newSubjectData.Name,
        Shortname: newSubjectData.Shortname,
        Price: newSubjectData.Price,
        Opened: newSubjectData.Opened,
        Lecturer: newSubjectData.Lecturer
    });
};

exports.updateSubject = (subId, subjectData) => {
    const Name = subjectData.Name;
    const Shortname = subjectData.Shortname;
    const Price = subjectData.Price;
    const Opened = subjectData.Opened;
    const Lecturer = subjectData.Lecturer;
    return Subject.update(subjectData, {where: {_id: subId}});
};

exports.deleteSubject = (subId) =>{
    return Subject.destroy({
        where: {_id: subId}
    });
};
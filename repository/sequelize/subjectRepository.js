const Subject = require('../../model/sequelize/Subject');
const Grades = require('../../model/sequelize/Grades');
const Student = require('../../model/sequelize/Student');

exports.getSubjects = () => {
    return Subject.findAll();
};

exports.getSubjectById = (subjectId) => {
    return Subject.findByPk(subjectId,
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
        ShortName: newSubjectData.ShortName,
        Price: newSubjectData.Price,
        Opened: newSubjectData.Opened,
        Lecturer: newSubjectData.Lecturer
    });
};

exports.updateSubject = (subjectId, subjectData) => {
    const Name = subjectData.Name;
    const ShortName = subjectData.ShortName;
    const Price = subjectData.Price;
    const Opened = subjectData.Opened;
    const Lecturer = subjectData.Lecturer;
    return Subject.update(subjectData, {where: {_id: subjectId}});
};

exports.deleteSubject = (subjectId) =>{
    return Subject.destroy({
        where: {_id: subjectId}
    });
};
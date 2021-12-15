const sequelize = require('./sequelize');

const Grades = require('../../model/sequelize/Grades');
const Student = require('../../model/sequelize/Student');
const Subject = require('../../model/sequelize/Subject');

module.exports = () => {

    Subject.hasMany(Grades, {
        as: 'grades',
        foreignKey: {name: 'Subject_id', allowNull: false},
        constraints: true,
        onDelete: 'CASCADE'
    });
    Grades.belongsTo(Subject, {
        as: 'subject',
        foreignKey: {name: 'Subject_id', allowNull: false}});
    Student.hasMany(Grades, {
        as: 'grades',
        foreignKey: {name: 'Student_id', allowNull: false},
        constraints: true,
        onDelete: 'CASCADE'
    });
    Grades.belongsTo(Student, {
        as: 'student',
        foreignKey: {name: 'Student_id', allowNull: false}});


    let allSubjects, allStudents;

    return sequelize
        .sync({force: true})
        .then( () => {
            return Subject.findAll();
        })
        .then(subjects => {
            if(!subjects || subjects.length === 0) {
                return Subject.bulkCreate([
                    {Name: 'English', ShortName: 'ENG', Price: 60.00, Opened: true, Lecturer: 'Anna Angielska'},
                    {Name: 'Russian', ShortName: 'RUS', Price: 75.00, Opened: true, Lecturer: 'Barbara Rosyjska'},
                    {Name: 'Spanish', ShortName: 'ESP', Price: 95.00, Opened: true, Lecturer: 'Andrzej Hiszpanski'},
                    {Name: 'Portugal', ShortName: 'PRT', Price: 45.50, Opened: true, Lecturer: 'Marek Portugalski'},
                ])
                    .then(() => {
                        return Subject.findAll();
                    });
            } else {
            return subjects;
            }
        })
        .then(subjects => {
            allSubjects = subjects;
            return Grades.findAll();
        })
        .then(students => {
            if(!students || students.length === 0)
            {
                return Student.bulkCreate([
                    {Name: 'Jan', Surname: 'Kowalski', Adress: 'Swietokrzyska 13', ZipCode: '02-654', BirthDate: '1995-03-25', PESEL: '95032563003'},
                    {Name: 'Pawel', Surname: 'Kalicki', Adress: 'Ananasowa 48', ZipCode: '04-175', BirthDate: '1999-03-22', PESEL: '99032298028'},
                    {Name: 'Paulina', Surname: 'Spychacz', Adress: 'Zaryna 2', ZipCode: '03-567', BirthDate: '2000-09-09', PESEL: '00290919062'}
                ])
                    .then( () => {
                        return Student.findAll();
                    });
                } else {
                return students;
            }
        })
        .then(grades => {
            if(!grades || grades.length === 0)
            {
                return Grades.bulkCreate([
                    {Grade: 5, Date: '2020-12-13', Comment: 'Sprawdzian Semetralny', Subject_id: allSubjects[0]._id, Student_id: allStudents[0]._id},
                    {Grade: 3, Date: '2020-09-18', Comment: 'Kartkowka1', Subject_id: allSubjects[0]._id, Student_id: allStudents[0]._id},
                    {Grade: 2, Date: '2021-12-10', Comment: 'Slowka', Subject_id: allSubjects[2]._id, Student_id: allStudents[1]._id},
                    {Grade: 4, Date: '2021-12-10', Comment: 'Slowka', Subject_id: allSubjects[2]._id, Student_id: allStudents[2]._id},
                    {Grade: 1, Date: '2021-12-10', Comment: 'Slowka', Subject_id: allSubjects[2]._id, Student_id: allStudents[0]._id},
                ]);
            }else{
                return grades;
            }
        });

};
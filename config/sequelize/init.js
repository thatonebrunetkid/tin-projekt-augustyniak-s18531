const sequelize = require('./sequelize');

const Grades = require('../../model/sequelize/Grades');
const Student = require('../../model/sequelize/Student');
const Subject = require('../../model/sequelize/Subject');

module.exports = async () => {
    Subject.hasMany(Grades, {
        as: 'grades',
        foreignKey: {
            name: 'Subject_id',
            allowNull: false
        },
        constraints: true,
        onDelete: 'CASCADE'
    });

    Grades.belongsTo(Subject, {
        as: 'subject',
        foreignKey: {
            name: 'Subject_id',
            allowNull: false
        }
    });

    Student.hasMany(Grades, {
        as: 'grades',
        foreignKey: {
            name: 'Student_id',
            allowNull: false
        },
        constraints: true,
        onDelete: 'CASCADE'
    });

    Grades.belongsTo(Student, {
        as: 'student',
        foreignKey: {
            name: 'Student_id',
            allowNull: false
        }
    });

    await sequelize.sync({ force: true })

    let subjects = await Subject.findAll();
    if (!subjects || subjects.length === 0) {
        await Subject.bulkCreate([
            {
                Name: 'English',
                ShortName: 'ENG',
                Price: 60.00,
                Opened: true,
                Lecturer: 'Anna Angielska'
            },
            {
                Name: 'Russian',
                ShortName: 'RUS',
                Price: 75.00,
                Opened: true,
                Lecturer: 'Barbara Rosyjska'
            },
            {
                Name: 'Spanish',
                ShortName: 'ESP',
                Price: 95.00,
                Opened: true,
                Lecturer: 'Andrzej Hiszpanski'
            },
            {
                Name: 'Portugal',
                ShortName: 'PRT',
                Price: 45.50,
                Opened: true,
                Lecturer: 'Marek Portugalski'
            },
        ])

        subjects = await Subject.findAll();
    }

    let students = await Student.findAll();
    if (!students || students.length === 0) {
        await Student.bulkCreate([
            {
                Name: 'Jan',
                Surname: 'Kowalski',
                Adress: 'Swietokrzyska 13',
                ZipCode: '02-654',
                BirthDate: '1995-03-25',
                PESEL: '95032563003'
            },
            {
                Name: 'Pawel',
                Surname: 'Kalicki',
                Adress: 'Ananasowa 48',
                ZipCode: '04-175',
                BirthDate: '1999-03-22',
                PESEL: '99032298028'
            },
            {
                Name: 'Paulina',
                Surname: 'Spychacz',
                Adress: 'Zaryna 2',
                ZipCode: '03-567',
                BirthDate: '2000-09-09',
                PESEL: '00290919062'
            }
        ])

        students = await Student.findAll();
    }

    let grades = await Grades.findAll();
    if (!grades || grades.length === 0) {
        await Grades.bulkCreate([{
            Grade: 5,
            Date: '2020-12-13',
            Comment: 'Sprawdzian Semetralny',
            Subject_id: subjects[0]._id,
            Student_id: students[0]._id
        },
            {
                Grade: 3,
                Date: '2020-09-18',
                Comment: 'Kartkowka1',
                Subject_id: subjects[0]._id,
                Student_id: students[0]._id
            },
            {
                Grade: 2,
                Date: '2021-12-10',
                Comment: 'Slowka',
                Subject_id: subjects[2]._id,
                Student_id: students[1]._id
            },
            {
                Grade: 4,
                Date: '2021-12-10',
                Comment: 'Slowka',
                Subject_id: subjects[2]._id,
                Student_id: students[2]._id
            },
            {
                Grade: 1,
                Date: '2021-12-10',
                Comment: 'Slowka',
                Subject_id: subjects[2]._id,
                Student_id: students[0]._id
            },
        ]);
    }
};

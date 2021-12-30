const StudentRepository = require('../repository/sequelize/studentRepositiry');


exports.showStudentsList = (req, res, next) => {
    StudentRepository.getStudents()
        .then(students => {
            res.render('Students View/Students', {
                students: students,
                navLocation: 'student'
            });
        });
};

exports.showAddStudentForm = (req, res, next) => {
    res.render('pages/student/form', {
        student: {},
        pageTitle: 'New student',
        formMode: 'createNew',
        btnLabel: 'Add student',
        formAction: '/students/add',
        navLocation: 'student',
        validationErrors: []
    });
}

exports.showStudentDetails = (req, res, next) =>
{
   const stdId = req.params.stdId;
   StudentRepository.getStudentById(stdId)
       .then(student => {
           res.render('pages/student/form', {
               student: student,
               formMode: 'showDetails',
               pageTitle: 'Student Details',
               formAction: '',
               navLocation: 'student',
               validationErrors: []
           });
       });
}

exports.showStudentEdit = (req, res, next) =>
{
    const stdId = req.params.stdId;
    StudentRepository.getStudentById(stdId)
        .then(student => {
            res.render('pages/student/form', {
                student: student,
                formMode: 'edit',
                pageTitle: 'Edit Student',
                btnLabel: 'Edit Student',
                formAction: '/students/edit',
                navLocation: 'student',
                validationErrors: []
            });
        });
};

exports.addStudent = (req, res, next) => {
    console.log('add log');
    console.log( {...req.body});
    const stdData = { ...req.body };
    StudentRepository.createStudent(stdData)
        .then( result => {
            res.redirect('/students');
        })
        .catch(err => {
            res.render('pages/student/form', {
                student: stdData,
                pageTitle: 'New student',
                formMode: 'createNew',
                btnLabel: 'Add student',
                formAction: '/students/add',
                navLocation: 'student',
                validationErrors: err.errors
            });
        })
};

exports.updateStudent = (req, res, next) => {
    const stdId = req.body.Student_id;
    const stdData = { ...req.body };
    console.log('logloglogloglogloglogloglogloglogloglogloglogloglogloglogloglog')
    console.log(req.body)
    StudentRepository.updateStudent(stdId, stdData)
        .then( result => {
            res.redirect('/students');
        })
        .catch(err => {
            StudentRepository.getStudentById(stdId)
                .then(student => {
                    res.render('pages/student/form', {
                        student: student,
                        formMode: 'edit',
                        pageTitle: 'Edit Student',
                        btnLabel: 'Edit Student',
                        formAction: '/students/edit',
                        navLocation: 'student',
                        validationErrors: err.errors
                })
            });
            console.log('errerrerrerrerrerrerrr ' + err.errors)
        })
};

exports.deleteStudent = (req, res, next) => {
    const stdId = req.params.stdId;
    StudentRepository.deleteStudent(stdId)
        .then( () => {
            res.redirect('/students');
        });
};
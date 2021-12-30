
const GradesRepository = require('../repository/sequelize/gradesRepository');
const SubjectRepository = require('../repository/sequelize/subjectRepository');
const StudentRepository = require('../repository/sequelize/studentRepositiry');

exports.showGradesList = (req, res, next) => {
    GradesRepository.getGrades()
        .then(grades => {
            res.render('Grades/GradesList', {
                grades: grades,
                navLocation: 'grades'
            });
        });
};

exports.showAddGradeForm = (req, res, next) => {
   let allSbj, allStd;
    SubjectRepository.getSubjects()
        .then(subjects => {
            allSbj = subjects;
            console.log('subjects')
            console.log(allStd);
            return StudentRepository.getStudents();

        })
        .then(students => {
            allStd = students;
            console.log(students);
            console.log('students')
            console.log(allStd);
            res.render('pages/grade/form', {
                grades: {},
                formMode: 'createNew',
                allSbj: allSbj,
                allStd: allStd,
                pageTitle: 'New Grade',
                btnLabel: 'Add Grade',
                formAction: '/grades/add',
                navLocation: 'grades',
                validationErrors: []
            });
        });
}


exports.showGradesDetails = (req, res, next) => {
    const grdId = req.params.grdId;
    let allSbj, allStd;
    SubjectRepository.getSubjects()
        .then(subjects => {
            allSbj = subjects;
            return StudentRepository.getStudents()
        })
        .then(students => {
            allStd = students;
            return GradesRepository.getGradeById(grdId)
        })
        .then(grades => {
            res.render('pages/grade/form', {
                grades: grades,
                formMode: 'showDetails',
                allSbj: allSbj,
                allStd: allStd,
                pageTitle: 'Grade Details',
                formAction: '',
                navLocation: 'grades',
                validationErrors: []
            });
        });
}
exports.showGradesEdit = (req, res, next) =>
{
    const grdId = req.params.grdId;
    let allSbj, allStd;
    SubjectRepository.getSubjects()
        .then(subjects => {
            allSbj = subjects;
            return StudentRepository.getStudents()
        })
        .then(students => {
            allStd = students;
            return GradesRepository.getGradeById(grdId)
        })
        .then(grades => {
            res.render('pages/grade/form', {
                grades: grades,
                formMode: 'edit',
                btnLabel: 'Edit Grade',
                allSbj: allSbj,
                allStd: allStd,
                pageTitle: 'Grade Details',
                formAction: '/grades/edit',
                navLocation: 'grades',
                validationErrors: []
            });
        });
}

exports.addGrade = (req, res, next) => {
    const grdData = { ...req.body};
    console.log('logloglogloglogloglogloglogloglogloglog');
    console.log({...req.body});
    GradesRepository.createGrade(grdData)
        .then(result => {
            res.redirect('/grades')
        })
        .catch(err => {
            const grdId = req.params.grdId;
            let allSbj, allStd;
            SubjectRepository.getSubjects()
                .then(subjects => {
                    allSbj = subjects;
                    return StudentRepository.getStudents()
                })
                .then(students => {
                    allStd = students;
                    return GradesRepository.getGradeById(grdId)
                })
                .then(grades => {
                    res.render('pages/grade/form', {
                        grades: grdData,
                        formMode: 'createNew',
                        allSbj: allSbj,
                        allStd: allStd,
                        pageTitle: 'New Grade',
                        btnLabel: 'Add Grade',
                        formAction: '/grades/add',
                        navLocation: 'grades',
                        validationErrors: err.errors
                    });
                });
        })
};

exports.updateGrade = (req, res, next) => {
    const grdId = req.body._id;
    const grdData = { ...req.body};
    console.log('logloglogloglogloglogloglogloglogloglog');
    console.log({...req.body});
    console.log(grdId);
    GradesRepository.updateGrade(grdId, grdData)
        .then(result => {
            res.redirect('/grades');
        })
        .catch(err => {
            let allSbj, allStd;
            SubjectRepository.getSubjects()
                .then(subjects => {
                    allSbj = subjects;
                    return StudentRepository.getStudents()
                })
                .then(students => {
                    allStd = students;
                    return GradesRepository.getGradeById(grdId)
                })
                .then(grades => {
                    res.render('pages/grade/form', {
                        grades: grades,
                        formMode: 'edit',
                        btnLabel: 'Edit Grade',
                        allSbj: allSbj,
                        allStd: allStd,
                        pageTitle: 'Grade Details',
                        formAction: '/grades/edit',
                        navLocation: 'grades',
                        validationErrors: err.errors
                    });
                });
        })
}



exports.deleteGrade = (req, res, next) => {
    const grdId = req.params.grdId;
    GradesRepository.deleteGrade(grdId)
        .then( () => {
            res.redirect('/grades');
        });
};
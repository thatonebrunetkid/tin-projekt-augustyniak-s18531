
const SubjectRepository = require('../repository/sequelize/subjectRepository');

exports.showSubjectList = (req, res, next) =>
{
    SubjectRepository.getSubjects()
        .then(subjects => {
            res.render('Subject View/SubjectsList', {
                subjects: subjects,
                navLocation: 'subject'
            });
        });
}

exports.showAddSubjectForm = (req, res, next) => {
    res.render('pages/subject/form', {
        subject: {},
        pageTitle: 'New subject',
        formMode: 'createNew',
        btnLabel: 'createNew',
        formAction: '/subjects/add',
        navLocation: 'subject',
        validationErrors: []
    });
}

exports.showSubjectDetails = (req, res, next) => {
    const subId = req.params.subId;
    console.log(req.params)
    SubjectRepository.getSubjectById(subId)
        .then(subject => {
            res.render('pages/subject/form', {
                subject: subject,
                formMode: 'showDetails',
                pageTitle: 'Subject Details',
                formAction: '',
                navLocation: 'subject',
                validationErrors: []
            });
        });
}

exports.showSubjectEdit = (req, res, next) => {
    const subId = req.params.subId;
    SubjectRepository.getSubjectById(subId)
        .then(subject => {
            res.render('pages/subject/form', {
                subject: subject,
                formMode: 'edit',
                pageTitle: 'Edit subject',
                btnLabel: 'Edit subject',
                formAction: '/subjects/edit',
                navLocation: 'subject',
                validationErrors: []
            });
        });
};

exports.addSubject = (req, res, next) => {
    const sbjData = { ...req.body};
    SubjectRepository.createSubject(sbjData)
        .then( result => {
            res.redirect('/subjects');
        })
        .catch(err => {
            res.render('pages/subject/form', {
                subject: sbjData,
                pageTitle: 'Add Subject',
                formMode: 'createNew',
                btnLabel: 'Add Subject',
                formAction: '/subjects/add',
                navLocation: 'subject',
                validationErrors: err.errors
            });
        })
};

exports.updateSubject = (req, res, next) => {
    const subId = req.body._id;
    const sbjData = { ...req.body };
    console.log('loglogloglog' + {...req.body.Opened});
    SubjectRepository.updateSubject(subId, sbjData)
        .then( result => {
            res.redirect('/subjects');
        })
        .catch(err => {
            SubjectRepository.getSubjectById(subId)
                .then(subject => {
                    sbjData._id = subject._id;
                    sbjData.Opened = subject.Opened;
                    console.log(sbjData);
                    res.render('pages/subject/form', {
                        subject: sbjData,
                        formMode: 'edit',
                        pageTitle: 'Edit Subject',
                        btnLabel: 'Edit Subject',
                        formAction: '/subjects/edit',
                        navLocation: 'subject',
                        validationErrors: err.errors
                    })
                });
            console.log('errerreerrreerreerrrerrr ' + err.errors)
        })

};

exports.deteleSubject = (req, res, next) => {
    const subId = req.params.subId;
    SubjectRepository.deleteSubject(subId)
        .then( () => {
            res.redirect('/subjects');
        });
};
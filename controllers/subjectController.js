
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
        navLocation: 'subject'
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
                navLocation: 'subject'
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
                navLocation: 'subject'
            });
        });
};

exports.addSubject = (req, res, next) => {
    const sbjData = { ...req.body};
    SubjectRepository.createSubject(sbjData)
        .then( result => {
            res.redirect('/subjects');
        });
};

exports.updateSubject = (req, res, next) => {
    const subId = req.body._id;
    const sbjData = { ...req.body };
    console.log('loglogloglog' + {...req.body.Name});
    SubjectRepository.updateSubject(subId, sbjData)
        .then( result => {
            res.redirect('/subjects');
        });
};

exports.deteleSubject = (req, res, next) => {
    const subId = req.params.subId;
    SubjectRepository.deleteSubject(subId)
        .then( () => {
            res.redirect('/subjects');
        });
};
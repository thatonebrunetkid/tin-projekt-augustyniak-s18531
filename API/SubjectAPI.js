const SubjectRepository = require('../repository/sequelize/subjectRepository');


exports.getSubjects = (req, res, next) =>
{
    SubjectRepository.getSubjects()
        .then(subjects => {
            res.status(200).json(subjects);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getSubjectById = (req, res, next) => {
    const subId = req.params.subId;
    console.log(req.params);
    SubjectRepository.getSubjectById(subId)
        .then(subject => {
            if(!subject) {
                res.status(404).json({
                    message: 'Subject not found, id:' + subId
                })
            } else {
                res.status(200).json(subject);
            }
        });
};

exports.createSubject = (req, res, next) => {
    SubjectRepository.createSubject(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateSubject = (req, res, next) => {
    const subId = req.params.subId;
    SubjectRepository.updateSubject(subId, req.body)
        .then(result => {
            res.status(200).json({message: 'Subject affected', subject: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteSubject = (req, res, next) => {
    const subId = req.params.subId;
    SubjectRepository.deleteSubject(subId)
        .then(result => {
            res.status(200).json({message: 'Subject affected', subject: result});
    })
        .catch(err => {
            if(!err.statusCode)
            {
                err.statusCode = 500;
            }
            next(err);
        });
};
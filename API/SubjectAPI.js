const SubjectRepository = require('../repository/sequelize/subjectRepository');


exports.getSubjects = (req, res, next) =>
{
    SubjectRepository.getSubjects()
        .then(subjects => {
            res.status(200).json(subjects);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Internal server error'
            })
        });
};

exports.getSubjectById = (req, res, next) => {
    const subjectId = req.params.subId;
    SubjectRepository.getSubjectById(subjectId)
        .then(subject => {
            if(!subject) {
                res.status(404).json({
                    message: 'Subject not found'
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
            console.log(req.body)
            next(err);});
};

exports.updateSubject = (req, res, next) => {
    const subjectId = req.params.subId;
    SubjectRepository.updateSubject(subjectId, req.body)
        .then(result => {
            res.status(200).json({message: 'Subject affected', sub: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteSubject = (req, res, next) => {
    const subjectId = req.params.subId;
    SubjectRepository.deleteSubject(subjectId)
        .then(result => {
            res.status(200).json({message: 'Subject affected', sub: result});
    })
        .catch(err => {
            if(!err.statusCode)
            {
                err.statusCode = 500;
            }
            next(err);
        });
};
const GradesRepository = require('../repository/sequelize/gradesRepository');

exports.getGrades = (req, res, next) =>
{
    GradesRepository.getGrades()
        .then(grades => {
            res.status(200).json(grades);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Internal server error'
            })
        });
};

exports.getGradeById = (req, res, next) => {
    const grdId = req.params.grdId;
    GradesRepository.getGradeById(grdId)
        .then(grade => {
            if(!grade) {
                res.status(404).json({
                    message: 'Grade not found'
                })
            } else {
                res.status(200).json(grade);
            }
        });
};

exports.createGrade = (req, res, next) => {
    GradesRepository.createGrade(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if(!err.statusCode)
            {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateGrade = (req, res, next) => {
    const grdId = req.params.grdId;
    GradesRepository.updateGrade(grdId, req.body)
        .then(result => {
            res.status(200).json({message: 'Grade affected', grade: result});
        })
        .catch(err => {
            if(!err.statusCode)
            {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteGrade = (req, res, next) => {
    const grdId = req.params.grdId;
    GradesRepository.deleteGrade(grdId)
        .then(result => {
            res.status(200).json({message: 'Grade affected', grade: result});
        })
        .catch(err => {
            if(!err.statusCode)
            {
                err.statusCode = 500;
            }
            next(err);
        });
};
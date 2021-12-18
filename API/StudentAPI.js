const StudentRepository = require('../repository/sequelize/studentRepositiry');

exports.getStudents = (req, res, next) => {
    StudentRepository.getStudents()
        .then(students => {
            res.status(200).json(students);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getStudentById = (req, res, next) => {
    const stdId = req.params.stdId;
    StudentRepository.getStudentById(stdId)
        .then(student => {
            if(!student)
            {
                res.status(404).json({
                    message: 'Student not found: id:' + stdId
                })
            } else {
                res.status(200).json(student);
            }
        });
};

exports.createStudent = (req, res, next) => {
    StudentRepository.createStudent(req.body)
        .then(newObj => {
            res.status(201).json(newObj)
        })
        .catch(err => {
            if(!err.statusCode)
            {
                err.statusCode = 500;
            }

            next(err);
        });
};

exports.updateStudent = (req, res, next) => {
    const stdId = req.params.stdId;
    StudentRepository.updateStudent(stdId, req.body)
        .then(result => {
            res.status(200).json({message: 'Student affected', student: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};


exports.deleteStudent = (req, res, next) => {
    const studentId = req.params.stdId;
    StudentRepository.deleteStudent(studentId)
        .then(result => {
            res.status(200).json({message: 'Student affected', student: result});
        })
        .catch(err => {
            if(!err.statusCode)
            {
                err.statusCode = 500;
            }
            next(err);
        });
};
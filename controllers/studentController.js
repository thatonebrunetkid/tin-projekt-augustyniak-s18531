exports.showStudentsList = (req, res, next) => {
    res.render('Students View/Students', {});
}

exports.showAddStudentForm = (req, res, next) => {
    res.render('Students View/StudentError', {});
}

exports.showStudentDetails = (req, res, next) =>
{
    res.render('Students View/StudentsDetails', {});
}

exports.showStudentEdit = (req, res, next) =>
{
    res.render('Students View/StudentEdit', {});
}
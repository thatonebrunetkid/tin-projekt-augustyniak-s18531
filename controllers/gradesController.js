exports.showGradesList = (req, res, next) => {
    res.render('Grades/GradesList', {});
}

exports.showAddGradeForm = (req, res, next) => {
    res.render('Grades/GradesError',{});
}

exports.showGradesDetails = (req, res, next) => {
    res.render('Grades/GradesDetails',{})
}
exports.showGradesEdit = (req, res, next) =>
{
    res.render('Grades/GradesEdit');
}
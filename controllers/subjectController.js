exports.showSubjectList = (req, res, next) =>
{
    res.render('Subject View/SubjectsList', {});
}

exports.showAddSubjectForm = (req, res, next) => {
    res.render('Subject View/SubjectError', {});
}

exports.showSubjectDetails = (req, res, next) => {
    res.render('Subject View/SubjectDetails',{});
}

exports.showSubjectEdit = (req, res, next) => {
    res.render('Subject View/SubjectEdit');
}
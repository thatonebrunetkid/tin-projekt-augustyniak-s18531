const express = require('express');
const router = express.Router();

const subjectController = require('../controllers/subjectController');

router.get('/', subjectController.showSubjectList);
router.get('/addSubject', subjectController.showAddSubjectForm);
router.get('/details/:subjectId', subjectController.showSubjectDetails);
router.get('/details/edit/:subjectId', subjectController.showSubjectEdit);

module.exports = router;
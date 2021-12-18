const express = require('express');
const router = express.Router();

const subjectController = require('../controllers/subjectController');

router.get('/', subjectController.showSubjectList);
router.get('/add', subjectController.showAddSubjectForm);
router.get('/details/:subId', subjectController.showSubjectDetails);
router.get('/edit/:subId', subjectController.showSubjectEdit);

router.post('/add', subjectController.addSubject);
router.post('/edit', subjectController.updateSubject);
router.get('/delete/:subId', subjectController.deteleSubject);
module.exports = router;
const express = require('express');
const router = express.Router();

const gradesController = require('../controllers/gradesController');

router.get('/', gradesController.showGradesList);
router.get('/addGrade', gradesController.showAddGradeForm);
router.get('/details/:gradeId', gradesController.showGradesDetails);
router.get('/details/edit/:gradeId', gradesController.showGradesEdit);

module.exports = router;
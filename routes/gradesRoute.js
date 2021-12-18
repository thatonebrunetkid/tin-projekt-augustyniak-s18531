const express = require('express');
const router = express.Router();

const gradesController = require('../controllers/gradesController');

router.get('/', gradesController.showGradesList);
router.get('/add', gradesController.showAddGradeForm);
router.get('/details/:grdId', gradesController.showGradesDetails);
router.get('/edit/:grdId', gradesController.showGradesEdit);

router.post('/add', gradesController.addGrade);
router.post('/edit', gradesController.updateGrade);
router.get('/delete/:grdId', gradesController.deleteGrade)

module.exports = router;
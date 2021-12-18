const express = require('express');
const router = express.Router();

const gradeApiController = require('../../API/GradesAPI');

router.get('/', gradeApiController.getGrades);
router.get('/:grdId', gradeApiController.getGradeById);
router.post('/', gradeApiController.createGrade);
router.put('/:grdId', gradeApiController.updateGrade);
router.delete('/:grdId', gradeApiController.deleteGrade);

module.exports = router;
const express = require('express');
const router = express.Router();

const subjectApiController = require('../../API/SubjectAPI');

router.get('/', subjectApiController.getSubjects);
router.get('/:subId', subjectApiController.getSubjectById);
router.post('/', subjectApiController.createSubject);
router.put('/:subId', subjectApiController.updateSubject);
router.delete('/:subId', subjectApiController.deleteSubject);

module.exports = router;
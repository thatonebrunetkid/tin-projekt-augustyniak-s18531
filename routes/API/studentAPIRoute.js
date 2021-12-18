const express = require('express');
const router = express.Router();

const studentApiController = require('../../API/StudentAPI');

router.get('/', studentApiController.getStudents);
router.get('/:stdId', studentApiController.getStudentById);
router.post('/', studentApiController.createStudent);
router.put('/:stdId', studentApiController.updateStudent);
router.delete('/:stdId', studentApiController.deleteStudent);

module.exports = router;
const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/', studentController.showStudentsList);
router.get('/addStudent', studentController.showAddStudentForm);
router.get('/details/:studentId', studentController.showStudentDetails);
router.get('/details/edit/:studentId', studentController.showStudentEdit);

module.exports = router;
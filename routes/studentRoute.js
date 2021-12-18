const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/', studentController.showStudentsList);
router.get('/add', studentController.showAddStudentForm);
router.get('/details/:stdId', studentController.showStudentDetails);
router.get('/edit/:stdId', studentController.showStudentEdit);



router.post('/add', studentController.addStudent);
router.post('/edit', studentController.updateStudent);
router.get('/delete/:stdId', studentController.deleteStudent);

module.exports = router;
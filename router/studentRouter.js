const router = require('express').Router();
const students = require('../controller/studentController.js');


router.route("/students/setdata").get(students.setAllStudents);
router.route('/students').get(students.getAllStudents);


module.exports = router;
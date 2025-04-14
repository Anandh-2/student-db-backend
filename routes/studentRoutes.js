const express = require('express');
const { getAllStudents, getStudent, createStudent, updateStudent, deleteStudent } = require('../controllers/studentController');
const router = express.Router();

router.get('/',getAllStudents);
router.get('/:id',getStudent);
router.post('/',createStudent);
router.put('/:id',updateStudent);
router.delete('/:id',deleteStudent);

module.exports=router;
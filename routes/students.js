const express = require("express");

const  student_Act = require("../controllers/students"); 

const router = express.Router();

router.get('/student', student_Act.getStudents);
router.get('/student/:id', student_Act.getspecStudent);
router.post('/student', student_Act.createstudent);
router.put('/student/:id', student_Act.updatestudent);
router.delete('/student/:id', student_Act.deletestudent);

module.exports=router;
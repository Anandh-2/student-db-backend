const Student = require("../models/student")

const getAllStudents = (req, res)=>{
    Student.find().then((students)=>{
        res.status(200).json({students:students});
    }).catch((err)=>{
        res.status(500).json({message:'Server error'});
    })
}

const getStudent = (req, res)=>{
    const studentId = req.params.id;
    Student.findById(studentId).then(student=>{
        res.status(200).json({student:student});
    }).catch(err=>{
        res.status(500).json({message:'Server error'});
    })
}

const createStudent = (req,res)=>{
    const {name, rollNo, email, mobile} = req.body;
    const student = new Student({
        name,
        rollNo,
        email,
        mobile
    });
    student.save().then(()=>{
        return res.status(200).json({message:'Student created', student:student});
    }).catch(err=>{
        console.error(err);
        return res.status(500).json({message:'Server error'});
    })
}

const updateStudent = (req,res)=>{
    const studentId = req.params.id;
    const {name, rollNo, email, mobile} = req.body;
    Student.findByIdAndUpdate(studentId, {name,rollNo,email,mobile}, {new:true}).then((student)=>{
        if(!student){
            return res.status(404).json({message:'Student not found'});
        }
        return res.status(200).json({message:'Student details updated', student:student});
    }).catch(err=>{
        return res.status(500).json({message:'Server error'});
    })
}

const deleteStudent = (req,res)=>{
    const studentId = req.params.id;
    Student.findByIdAndDelete(studentId).then(()=>{
        return res.status(200).json({message:'Student deleted successfully'});
    }).catch(err=>{
        return res.status(500).json({message:'Server error'});
    })
}

module.exports={getAllStudents,getStudent,createStudent,updateStudent,deleteStudent};
const studentService =require("../services/StudentService");
const StudentSchema = require("../models/Student.js");

exports.getAllStudents = async (req, res) => {
    try{
        const students = await studentService.getAllStudents();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({data: students, status: "success"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.createStudent = async (req, res) =>{
    try{
        const student = await studentService.createStudent(req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({data: student, status: "success"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.getStudentById = async (req, res) =>{
    try{
        const student = await studentService.getStudentById(req.params.id);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({data: student, status: "success"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};
exports.updateStudent = async (req, res) =>{
    try{

        const student = await studentService.updateStudent(req.params.id, req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (student == null) {
            res.status(404).json({ message : `Không tìm thấy sinh viên có mã id ${req.params.id}`, status: "error"});
        } else {
        res.json({data: student, status: "success"});
        }
    }catch(err){
        res.status(500).json({error: `id sinh viên không hợp lệ`});
    }
};
exports.deleteStudent = async (req, res) =>{
    try{
        const student = await studentService.deleteStudent(req.params.id, req.body);
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (student == null) {
            res.status(404).json({ message : `Không tìm thấy sinh viên có mã id ${req.params.id}`, status: "error"});
        } else {
        res.json({data: student, status: "success"});
        }
    }catch(err){
        res.status(500).json({error: `id sinh viên không hợp lệ`});
    }
};
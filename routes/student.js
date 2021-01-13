var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var mongoose = require('mongoose');
var Student = mongoose.model('Student');
var Table = mongoose.model('Table');

 router.post('/addStudent', function(req, res, next) {
        var student = new Student({
            openId: req.body.openId,
            name: req.body.name,
            sex:req.body.sex,
            userBirthday:req.body.userBirthday,
            school:req.body.school,
            grade:req.body.grade,
            startTime:req.body.startTime,
            endTime:req.body.endTime,
        })
     
        student.save(function(err,docs){
            if(err) {
                res.end('Error');
                return next();
            }
            let table = new Table({
                studentId:docs._id,
                timetable: {
                    1_1:"",
                    1_2:"",
                    1_3:"",
                    1_4:"",
                    1_5:"",
                    1_6:"",
                    1_7:"",
                    1_8:"",
                    2_1:"",
                    2_2:"",
                    2_3:"",
                    2_4:"",
                    2_5:"",
                    2_6:"",
                    2_7:"",
                    2_8:"",
                    3_1:"",
                    3_2:"",
                    3_3:"",
                    3_4:"",
                    3_5:"",
                    3_6:"",
                    3_7:"",
                    3_8:"",
                    4_1:"",
                    4_2:"",
                    4_3:"",
                    4_4:"",
                    4_5:"",
                    4_6:"",
                    4_7:"",
                    4_8:"",
                    5_1:"",
                    5_2:"",
                    5_3:"",
                    5_4:"",
                    5_5:"",
                    5_6:"",
                    5_7:"",
                    5_8:"",
                },
            })
            table.save(function(err2){
                if(err2) {
                    res.end('Error');
                    return next();
                }
                res.json({
                    code:200,
                    msg:"成功",
                    data:student
                });
            })
            
 
        })
   })
   router.get('/findStudent',function(req,res,next){
        Student.find({}, function(err, docs) {
                if(err) {
                    res.end('Error');
                    
                }
                res.json({
                    code:200,
                    msg:"成功",
                    data:docs
                });
                return next();


        })
   })
   router.get('/findStudentDetail',function(req,res,next){
       
    Student.find({_id:req.query.id}, function(err, docs) {
            if(err) {
                res.end('Error');
                
            }
            res.json({
                code:200,
                msg:"成功",
                data:docs[0]
            });
            return next();
        // Student.count({},function(error,count){
           
        // })

    })
})
   module.exports = router;
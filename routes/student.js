var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var mongoose = require('mongoose');
var Student = mongoose.model('Student');
var Table = mongoose.model('Table');

 router.post('/addStudent', function(req, res, next) {
     if(req.body.id){
         let student = {
            name: req.body.name,
            sex:req.body.sex,
            userBirthday:req.body.userBirthday,
            school:req.body.school,
            grade:req.body.grade,
            startTime:req.body.startTime,
            endTime:req.body.endTime,
         }
            Student.updateOne({ _id: req.body.id},student, function(err, docs) {
                if(err) {
                    console.log(21,err)
                    res.end('Error');
                }
                res.json({
                    code:200,
                    msg:"修改成功",
                    data:docs
                });
        })
     }else{
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
                    11:"",
                    12:"",
                    13:"",
                    14:"",
                    15:"",
                    16:"",
                    17:"",
                    18:"",
                    21:"",
                    22:"",
                    23:"",
                    24:"",
                    25:"",
                    26:"",
                    27:"",
                    28:"",
                    31:"",
                    32:"",
                    33:"",
                    34:"",
                    35:"",
                    36:"",
                    37:"",
                    38:"",
                    41:"",
                    42:"",
                    43:"",
                    44:"",
                    45:"",
                    46:"",
                    47:"",
                    48:"",
                    51:"",
                    52:"",
                    53:"",
                    54:"",
                    55:"",
                    56:"",
                    57:"",
                    58:"",
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
     }
 
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
                // return next();


        })
   })
   router.get('/findStudentDetail',function(req,res,next){
       
            Student.findOne({_id:req.query.id}, function(err, docs) {
            
                try{
                    if(err) {
                        throw err;
                        // res.end('Error');
                        
                    }
                    if(docs){
                        res.json({
                            code:200,
                            msg:"成功",
                            data:docs
                        });
                    }else{
                        res.json({
                            code:408,
                            msg:"获取失败",
                            data:[]
                        });
                    }
                }catch(e){
                    console.log('err',e);
                    return next();

                }
    

            })
       
 
})
   module.exports = router;
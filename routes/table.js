var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var mongoose = require('mongoose');
var Table = mongoose.model('Table');


 router.post('/addStudent', function(req, res, next) {
        var table = new Table({
            studentId: req.body.studentId,
            timetable: {},
        })
     
        table.save(function(err){
            if(err) {
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

   router.get('/findTableByStudent',function(req,res,next){

    Table.findOne({studentId:req.query.studentId}, function(err, docs) {
            if(err) {
                res.end('Error');
                
            }
            res.json({
                code:200,
                msg:"成功",
                data:docs.timetable
            });
            return next();
        // Student.count({},function(error,count){
           
        // })

    })
})
   module.exports = router;
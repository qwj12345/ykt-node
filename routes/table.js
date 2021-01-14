var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var mongoose = require('mongoose');
var Table = mongoose.model('Table');


 router.post('/updateTable', function(req, res, next) {
        // var table = new Table({
        //     studentId: req.body.studentId,
        //     timetable: {

        //     },
        // })
     
        try{
            Table.update({studentId: req.body.studentId},{timetable:JSON.parse(req.body.timetable)},function(err,doc){
                if(err) {
                    res.end('Error');
                    return next();
                }
                
                res.json({
                 code:200,
                 msg:"成功",
                 data:doc
                });
     
            })
        }catch(e){
            console.log('catch',e)
        }

   })

   router.get('/findTableByStudent',function(req,res,next){

    Table.findOne({studentId:req.query.studentId}, function(err, docs) {
            if(err) {
                res.end('Error');
                
            }
           
            if(docs){
                res.json({
                    code:200,
                    msg:"成功2",
                    data:docs.timetable
                });
            }else{
                res.json({
                    code:600,
                    msg:"查找不到",
                    data:docs
                });
            }
            
            // return next();
        // Student.count({},function(error,count){
           
        // })

    })
})
   module.exports = router;
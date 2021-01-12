var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

// 创建application/json 解析器
var jsonParser = bodyParser.json()
// 创建 application/x-www-form-urlencoded 解析器
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', function(req, res, next) {
   res.send('respond with a resource');
});
router.post('/addUser', function(req, res, next) {
       var user = new User({
           username: req.query.name,
           telPhone:req.query.telPhone,
           password:req.query.password,
           createTime:new Date()
       })
    
    user.save(function(err){
           if(err) {
               res.end('Error');
               return next();
           }
           
           res.json({
            code:200,
            msg:"成功",
            data:user
           });

       })
  })
  router.get('/findUser',function(req,res,next){
           User.find({}, function(err, docs) {
                if(err) {
                    res.end('Error');
                    return next();
                }

               User.count({},function(error,count){
                res.json({
                    code:200,
                    msg:"成功",
                    length:count,
                    data:docs
                   });
               })

           })
  })
  module.exports = router;
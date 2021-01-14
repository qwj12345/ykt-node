var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
const WechatUtil = require("../utils/WechatUtil")
const wechat = new WechatUtil()

router.post("/wxLogin", (req, res, next) => {
    const { code, encryptedData, iv } = req.body;
    

    wechat.getSessionKeyOropenid(code).then(e => {

        // 获取微信用户信息
        const wechatUserInfo = wechat.getWechatUserInfo(encryptedData, iv)
        var user = new User({
            openid:wechatUserInfo.openId,
            username: wechatUserInfo.nickName,
            gender:wechatUserInfo.gender===1?'男':'女',
            createTime:new Date()
        })
     
        user.save(function(err){
            
            if(err) {
                if(err.code === 11000){
                    res.json({
                        code:200,
                        msg:"登录成功",
                        data:wechatUserInfo
                       });
                }else{
                    res.json({
                        code:500,
                        msg:"插入数据库失败",
                        data:err
                       });
                }

            }else{
                res.json({
                    code:200,
                    msg:"注册成功",
                    data:wechatUserInfo
                   });
            }
            // console.log(23213)
            // return next();

        })
    }).catch(err => {
        res.json({
            msg: "授权失败",
            error: err
        })
    })
})

module.exports = router;
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    openid: {
        type:String,
        unique:true
    },
    username: String,
    gender: String,
    createTime: Date
});

mongoose.model('User', UserSchema);
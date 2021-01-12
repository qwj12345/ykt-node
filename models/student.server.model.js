var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    openId:String,
    name: String,
    sex:String,
    userBirthday: String,
    school:String,
    grade:String,
    startTime: String,
    endTime: String,
});

mongoose.model('Student', StudentSchema);
let mongoose = require('mongoose');
let config = require('./config.js');

module.exports = function(){
    let db = mongoose.connect(config.mongodb);
    require('../models/user.server.model.js');
    require('../models/timetable.server.model.js');
    require('../models/student.server.model.js');
    return db;
}
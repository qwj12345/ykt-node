var mongoose = require('mongoose');

var TableSchema = new mongoose.Schema({
    studentId: {
        type:String,
        unique:true
    },
    timetable: {
        11:String,
        12:String,
        13:String,
        14:String,
        15:String,
        16:String,
        17:String,
        18:String,
        21:String,
        22:String,
        23:String,
        24:String,
        25:String,
        26:String,
        27:String,
        28:String,
        31:String,
        32:String,
        33:String,
        34:String,
        35:String,
        36:String,
        37:String,
        38:String,
        41:String,
        42:String,
        43:String,
        44:String,
        45:String,
        46:String,
        47:String,
        48:String,
        51:String,
        52:String,
        53:String,
        54:String,
        55:String,
        56:String,
        57:String,
        58:String,
    },
    
});

mongoose.model('Table', TableSchema);
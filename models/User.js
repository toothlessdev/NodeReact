const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type : String,
        maxlength : 50,
    },
    email : {
        type : String,
        trim : true, // 빈칸을 없애주는 역할
        unique : 1 //동일한 이메일 사용불가
    },
    password : {
        type : String,
        minlength : 5
    },
    lastname : {
        type : String,
        maxlength : 50
    },
    role : {
        type : Number,
        default : 0
    },
    image : String,
    token : { // 유효성 검증을 위한 
        type : String
    },
    tokenExp : {
        type : Number
    }
});

const User = mongoose.model('User', userSchema);

module.exports = {User};
const User = require('../models/userModel');
const {authSchema} = require ('../helpers/validationSchema')
const creatError = require('http-errors');
require('dotenv').config();
const {signAccessToken, signRefreshToken} = require('../helpers/jwtHelper');
const {verifyAccessToken} = require('../helpers/jwtHelper');

module.exports = {
    reqister: async (req, res, next) => {
        try{
            const {email, password}= req.body;
            const result = await validateAsync(req.body)
    
            const exists = await User.findOne({email: email});
            if (exists) throw creatError.Conflict(`${email} has already exists `)
    
                const user = new User(result);
                const savedUser = await user.save();
                
                const accessToken = signAccessToken(savedUser._id);
                // const refreshToken = signRefreshToken(savedUser._id);
    
                res.send({accessToken});
        }
    catch (error){
        next(error);
    }
} 
}
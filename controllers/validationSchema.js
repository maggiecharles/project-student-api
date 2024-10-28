const Joi = require('joi')
const authScheme =Joi.object({
    email: Joi.string().email().required().lowercase(),
    password: Joi.string().min(6).required()
})
module.exports = {authSchema}
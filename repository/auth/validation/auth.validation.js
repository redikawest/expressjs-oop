const Joi = require("joi")

const login = {
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required()
    })
}

const forgotPassword = {
    body: Joi.object().keys({
        email: Joi.string().required().email()
    })
}

module.exports = {
    login, forgotPassword
}
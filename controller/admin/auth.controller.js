const AuthLogic = require("../../repository/auth/logic/auth.logic")

class AuthController extends AuthLogic
{

    async login(req, res) {
        return await super.login(req, res)
    }

    async forgotPassword(req, res) {
       return await super.forgotPassword(req, res)
    }
}

module.exports = AuthController
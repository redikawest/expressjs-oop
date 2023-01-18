const AuthLogic = require("../../repository/auth/logic/auth.logic")

class AuthController extends AuthLogic
{

    async login(req, res) {
        try {
            return res.send('asdasd')
           let data = await super.handleLogin(req, res)
           return res.send(data)
        } catch (error) {
            
        }
    }

    async forgotPassword() {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = AuthController
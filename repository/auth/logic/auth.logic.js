const AuthInterface = require("../interface/auth.interface")

class AuthLogic extends AuthInterface
{
    async login(req, res) {
        return res.send('login')
    }

    async forgotPassword (req, res) {
        return res.send('forgot password')
    }
}

module.exports = AuthLogic
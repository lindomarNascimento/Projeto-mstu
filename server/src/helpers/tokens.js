import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { errorMessage, status } from '../helpers/status'

dotenv.config();

const generateToken = loginKey => {
    const token = jwt.sign({
        loginKey
    },
    process.env.SECRET,{ expiresIn: '3h' })
    return token
}

const verifyToken = async (req, res, next) => {
    const { token } = req.headers
    if (!token) {
        errorMessage.error = 'Token not provided'
        return res.status(status.bad).send(errorMessage)
    }
    try {
        const decoded =  jwt.verify(token, process.env.SECRET)
        req.user = {
            loginKey: decoded.loginKey,
        }
        next()
    } catch (error) {
        errorMessage.error = 'Authentication Failed'
        return res.status(status.unauthorized).send(errorMessage)
    }
  };
  
  export {verifyToken, generateToken}
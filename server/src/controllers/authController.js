import dbQuery from '../db/dbQuery'
import { generateToken } from '../helpers/tokens'
import {
  errorMessage, successMessage, status,
} from '../helpers/status'

const authUser = async (req, res) => {

    const { loginKey } = req.body
    const loginVolunteerQuery = `SELECT code, description as codetype 
                                FROM tbCodes 
                                inner join tbcodetypes 
                                on tbcodes.codetype = tbcodetypes.id 
                                where tbcodes.code = $1;`
    
    try {
        // auth login key
        const { rows } = await dbQuery.query(loginVolunteerQuery, [loginKey])
        const dbResponse = rows[0]

        if (!dbResponse) {
            errorMessage.error = "Key doesn't exist"
            res.status(status.notfound).send(errorMessage)
            res.redirect('/')
        }
        // TODO: test below
        // if (dbResponse.codetype === 'volunteer') {
        //     const deleteKeyQuery = `delete from tbcodes where code = $1`
        //     await dbQuery.query(deleteKeyQuery, [loginKey])
        // }

        // generating cookie with token to auto reconnect with page
        const token = generateToken(loginKey)
        successMessage.data = dbResponse
        successMessage.data.token = token
        successMessage.status = 'Success'
        res.setHeader('Set-Cookie', `token=${token}; HttpOnly`)
        res.status(status.success).send(successMessage)

        res.redirect(dbResponse.codetype === 'volunteer' ? '/volunteer' : '/admin')
    } catch (error) {
        errorMessage.error = 'Operation was not successful'
        return res.status(status.error).send(errorMessage)
    }
}

export {
    authUser
}

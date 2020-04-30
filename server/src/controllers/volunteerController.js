import dbQuery from '../db/dbQuery'
import {
  errorMessage, status,
} from '../helpers/status'

const listPeople = async (req, res, next) => {
    const {color} = req.params
    console.log(color);
    
    const listPeopleQuery = `SELECT * FROM tbPeople 
                            WHERE color = 
                            (select id from tbColors 
                                where colorName = $1);`

    try {
        const { rows } = await dbQuery.query(listPeopleQuery, [color])
        const dbResponse = rows
        console.log(dbResponse);
        
        if (!dbResponse) {
            errorMessage.error = "Color doesn't exist"
            res.status(status.notfound).send(errorMessage)
            res.redirect('/')
        }

        res.send(rows)
        next()
    } catch (error) {
        errorMessage.error = 'Operation was not successful'
        return res.status(status.error).send(errorMessage)
    }
}

export {
    listPeople
}
import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import volunteerRoute from './src/routes/volunteerRoute';
import authRoute from './src/routes/authRoute';

dotenv.config()

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(volunteerRoute)
app.use(authRoute)

const Port = process.env.PORT;
const IP = process.env.IP;
app.listen(Port, IP, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log('🚀Server is listening at ' + IP + ':' + Port);
    }
});

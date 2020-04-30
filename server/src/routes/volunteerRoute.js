import express from 'express'
import { listPeople } from '../controllers/volunteerController'
import { verifyToken } from '../helpers/tokens'

const route = express.Router()

route.get('/volunteer/:color', verifyToken, listPeople);

module.exports = route
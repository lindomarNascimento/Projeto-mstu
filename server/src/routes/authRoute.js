import express from 'express';
import { authUser } from "../controllers/authController";

const route = express.Router();

route.post('/auth', authUser);

module.exports = route;
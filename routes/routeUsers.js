import express from "express";
import {index} from "../controllers/users.js";
import { authenticateUser} from "../middlewares/auth.js"

const routeUser = express.Router();

// Root route
routeUser.get("/",authenticateUser, index);


export default routeUser;
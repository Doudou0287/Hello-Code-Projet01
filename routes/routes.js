import express from "express";
import { index, signup, login, verify, logout, getSignup} from "../controllers/home";
import {existUser, authenticateUser} from "../middlewares/auth.js"
// import { index } from "../controllers/articles.js";
const router = express.Router();

// Root route
router.get("/", index);
router.get("/login", login);
router.get("/signup", getSignup);
router.post("/signup",existUser, signup);

router.post("/verify",verify);

router.get("/logout",authenticateUser, logout);
export default router;
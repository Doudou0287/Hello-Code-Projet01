import jwt from "jsonwebtoken";
import User from "../Models/User";
import { formatDate,checkToken } from "../utils/utils.js";
import dotenv from 'dotenv';
dotenv.config();
const { SESSION_SECRET } = process.env;


export const authenticateUser = async (req, res, next) => {
  try {
    console.log("isAuthenticated starting")
    const token = req.query.token || req.body.token || req.headers["x-access-token"];
    // console.log("req.session ", req.session)

    if (req.session.userId) {
      return next(); // Move to the next middleware or route handler
    }
    if (!token) {
      // console.log("Redirect the user to the login page (token not provided)")
      return res.redirect('/login');
    }

    // Verify the token
    jwt.verify(token, SESSION_SECRET, (err, decoded) => {
      if (err) {
        console.error("Error during token verification:", err);
        return res.status(403).json({ message: "Invalid or expired token." });
      }
      next();
    });
  
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};


export const existUser = async (req, res, next) => {
  const { email } = req.body;
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("user exists");
      res.redirect("/login");
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

export const isAdmin = async (req, res, next) => {
  console.log('isAdmin starting')
  const token = req.session.token;
  let userRole = checkToken(token)
  try {
    // Check if the user isAdmin
    if(userRole === "admin") {
      console.log('isAdmin passing')
      next();
    } 
    else {
      console.log('isAdmin not passing, hence redirecting')
      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
  return userRole === "admin" ? true : false
};
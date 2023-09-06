import jwt from "jsonwebtoken";
import User from "../Models/User";

import dotenv from 'dotenv';
dotenv.config();
const { SESSION_SECRET } = process.env;


export const authenticateUser = async (req, res, next) => {
  try {
    console.log("isAuthenticated starting")
    const token = req.query.token || req.body.token || req.headers["x-access-token"];
    console.log("req.session ", req.session)

    if (req.session.userId) {
      console.log("The user is logged in (using session)", req.session.userId)
      // The user is logged in (using the session)
      return next(); // Move to the next middleware or route handler
    }
    if (!token) {
      console.log("Redirect the user to the login page (token not provided)")
      return res.redirect('/login');
    }

    // Verify the token
    jwt.verify(token, SESSION_SECRET, (err, decoded) => {
      if (err) {
        console.error("Error during token verification:", err);
        return res.status(403).json({ message: "Invalid or expired token." });
      }

      // Token is valid, extract the userId and role from the decoded token
      // req.userId = decoded.userId;
      // req.role = decoded.role;
      // console.log('User ID and role set in token:', req.userId, req.role);
      next();
    });
    console.log("isAuthenticated done")
  // try {
  //   const userToken = jwt.verify(token, process.env.SESSION_SECRET);
  //   // Retrieve the user information from the database using the token data
  //   const user = await User.findById(userToken.userId).exec();
  //   console.log("user ", user)
  //   if (!user) {
  //     console.log("Authentication failed");
  //     res.redirect("/");
  //   } else {
  //     req.user = user;
  //     next();
  //   }
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

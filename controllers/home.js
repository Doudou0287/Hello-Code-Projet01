import User from "../Models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = (req, res) => {
  const { error } = req.query; // Get the error parameter from the query string
  res.render('home/login', { error }); // Pass the error variable to the login view
};

export const getSignup = (req, res) => {
  const { error } = req.query; // Get the error parameter from the query string
  res.render('home/register', { error }); // Pass the error variable to the login view
};

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(req.body);
  try {

      // Create a new user
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password:hashedPassword });
      await newUser.save();
      // console.log("data inserted to bdd")
      const token = jwt.sign({ userId: newUser._id }, process.env.SESSION_SECRET);
      // console.log("data saved in token")
      // Store the user ID in the session
      req.session.userId = newUser._id;
      req.session.token = token;
      // console.log("user doesn't exist");
      res.redirect("/login");
    
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};


export const verify = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user based on the provided email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      const error = "User does not exist";
      console.log(error);
      
      res.render("home/login", { error });
      return;
    }
    
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch && email === user.email) {
      // Passwords match, create a token and store the user ID in the session
      const token = jwt.sign({ userId: user._id, userRole: user.role }, process.env.SESSION_SECRET);
      req.session.userId = user._id;
      req.session.token = token;
      res.redirect("/");
    } else {
      // Passwords do not match
      const error = "Incorrect password or email";
      console.log(error);
      
      res.redirect("/login");
    }
  
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

export const logout = (req, res) => {
  // Access the token from the session
  const token = req.session.token;

  // Verify and decode the token (assuming you used the same SECRET)
  jwt.verify(token, process.env.SESSION_SECRET, (err, decoded) => {
    if (err) {
      console.error('Error verifying token:', err);
      // Handle the error if necessary
    } else {
      // Access the user ID and user role from the decoded token
      const userId = decoded.userId;
      const userRole = decoded.userRole;
      
      // console.log(decoded)
      // You can use the user ID and role for any necessary actions here

      // Destroy the user's session to reset everything
      req.session.destroy(err => {
        if (err) {
          console.error('Error destroying session:', err);
          // Handle the error if necessary
        } else {
          // Redirect the user to a page after logout (e.g., home page)
          res.redirect('/');
        }
      });
    }
  });
}
import User from "../Models/User.js";
// import jwt from "jsonwebtoken";
import { formatDate,checkToken } from "../utils/utils.js";
export const index = async (req, res) => {
    try {
        const token = req.session.token;
        let userRole = checkToken(token)
        // Retrieve articles from the database
        const users = await User.find({}).limit(10);
        
    
        // render the articles page with articles passing to the front end
        res.render('home/users', { users, userRole});
    } catch (error) {
        // Handle errors and send an error response if necessary
        console.error('Error fetching articles:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

// Define the formatDate function to include date and time
export function formatDate(date) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      
    };
    return new Date(date).toLocaleDateString(undefined, options);
}

export function checkToken(token) {
    
    let userRole
    // Verify and decode the token (assuming you used the same SECRET)
    jwt.verify(token, process.env.SESSION_SECRET, (err, decoded) => {
        if (err) {
        console.error('Error verifying token:', err);
        // Handle the error if necessary
        } else {
            console.log('token good')
            userRole = decoded.userRole;
        }
    })
    return userRole
}
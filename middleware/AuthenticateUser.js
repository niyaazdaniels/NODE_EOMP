// Importing necessary modules and dependencies
import { config } from 'dotenv'; // Module to load environment variables from a .env file
config(); // Load environment variables from .env into process.env
import jwt from 'jsonwebtoken'; // JSON Web Token implementation for generating and verifying tokens
import bcrypt from 'bcrypt'; // Library for hashing passwords
import { verifyUser } from '../models/users.js'; // Importing user verification function from the MVC model

// Middleware function to verify if a token is present and valid
const verifyToken = (req, res, next) => {
    // Extracting token from request headers
    let { cookie } = req.headers;
    let tokenInHeader = cookie && cookie.split('=')[1];
    // If no token is found in the header, return 401 Unauthorized
    if (!tokenInHeader) {
        return res.sendStatus(401); // Unauthorized
    }

    // Verifying the token using the secret key
    jwt.verify(tokenInHeader, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            // If token is invalid or expired, return 401 Unauthorized
            return res.status(401).send({ msg: "Invalid or expired token" });
        }
        // If token is valid, attach the user information to the request and proceed
        req.user = user;
        next();
    });
};

// Function to handle user login and generate a new token upon successful login
const createToken = async (req, res, next) => {
    // Extracting email and password from the request body
    const { emailAdd, userPass } = req.body;
    // Retrieving hashed password for the given email
    const hashedUserPass = await verifyUser(emailAdd);
    // Comparing provided password with the hashed password
    bcrypt.compare(userPass, hashedUserPass, (err, result) => {
        if (err) {
            // If an error occurs during comparison, throw the error
            throw err;
        }if (result === true) {
            // If passwords match, generate a new JWT token
            const token = jwt.sign({ emailAdd: emailAdd }, process.env.SECRET_KEY, { expiresIn: '1hr' });            // Set the token as a cookie in the response
            res.cookie('jwt', token, { httpOnly: false });
            // Send a success response with the token and a message
            res.send({
                token: token,
                msg: "You have logged in successfully!"
            });
            next(); // Proceed to the next middleware
        } else {
            // If passwords do not match, send a response indicating authentication failure
            res.send({ msg: "The username or password does not match" });
        }
    });
};

// Exporting middleware functions to make them accessible from other modules
export { verifyToken, createToken };

import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { verifyUser } from '../models/users.js';

config();

// const verifyToken = (req, res, next) => {
//     const { cookies } = req.headers;
//     const tokenInCookie = cookies && cookies.split('=')[1];

//     if (!tokenInCookie) {
//         console.log("No token found in cookie");
//         return res.sendStatus(401);
//     }
//     jwt.verify(tokenInCookie, process.env.SECRET_KEY, (err, user) => {
//         if (err) {
//             console.error("Token verification failed:", err);
//             return res.status(401).send({ msg: "Invalid or expired token" });
//         }
//         console.log("Token verified successfully");
//         req.user = user;
//         next();
//     });
// };
const verifyToken = async (req,res,next)=>{
    const {emailAdd,userPass} = req.body
    const hashedPassword = await verifyUser(emailAdd)
    bcrypt.compare(userPass,hashedPassword,(err,result)=>{
        if(err) throw err
        if(result === true){
            console.log(emailAdd)
            const token = jwt.sign({emailAdd:emailAdd},process.env.SECRET_KEY,{expiresIn:'1h'})
            res.send({
                token:token,
                msg:'You have login succesfully'
            })
            next()
        }else{
            res.json({msg:'Password or Email address doesnt match'})
        }
    })
}

// const createToken = async (req, res, next) => {
//     try {
//         const { emailAdd, userPass } = req.body;
//         const hashedUserPass = await verifyUser(emailAdd);

//         if (!hashedUserPass) {
//             console.log("User not found");
//             return res.status(401).send({ msg: "User not found" });
//         }

//         const result = await bcrypt.compare(userPass, hashedUserPass);

//         if (result === true) {
//             console.log("Password matched. Creating token...");
//             const token = jwt.sign({ emailAdd: emailAdd }, process.env.SECRET_KEY, { expiresIn: '1h' });
//             res.cookie('jwt', token, { httpOnly: false });
//             console.log("Token created successfully");
//             // return res.json({
//             //     token: token,
//             //     msg: "You have logged in successfully!"
//             next()
//             // });
//         } else {
//             console.log("Password does not match");
//             return res.status(401).send({ msg: "The username or password does not match" });
//         }
//     } catch (error) {
//         console.error("Error logging in:", error);
//         return res.status(500).send('Error logging in: ' + error);
//     }
// };
const createToken = async (req, res, next) => {
    try {
        const { emailAdd, userPass } = req.body;
        const hashedUserPass = await verifyUser(emailAdd);

        if (!hashedUserPass) {
            console.log("User not found");
            return res.status(401).send({ msg: "User not found" });
        }

        const result = await bcrypt.compare(userPass, hashedUserPass);

        if (result === true) {
            console.log("Password matched. Creating token...");
            const token = jwt.sign({ emailAdd: emailAdd }, process.env.SECRET_KEY, { expiresIn: '1h' });
            res.cookie('jwt', token, { httpOnly: false });
            console.log("Token created successfully");
            // Do not send a response here
            next(); // Proceed to the next middleware
        } else {
            console.log("Password does not match");
            return res.status(401).send({ msg: "The username or password does not match" });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        return res.status(500).send('Error logging in: ' + error);
    }
};


export { verifyToken, createToken };

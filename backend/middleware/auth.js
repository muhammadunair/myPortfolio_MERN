import {User} from "../Model/User.js";
import  Jwt from "jsonwebtoken";

// export const isAuthenicated = async(req, res, next)=>{
//     try {
//         const {token} = req.cookies;

//         if(!token){
//             return res.status(400).json({
//                 success:false,
//                 message:"Login to access this resource ",
//             })
//         }
//         const decoded = Jwt.verify(token, process.env.JWT_SECRET);
//         const user = await User.findById(decoded._id);
//         req.user = user;
//         next();
//     } catch (error) {
//         return res.status(400).json({
//             success:false,
//             message:error.message,
//         })
        
//     }

// }

export const isAuthenicated = async(req, res, next)=>{
    try {
        // const {token} = req.cookies;
        const token = req.header('Authorization');
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Login to access this resource ",
            })
        }
        const decoded = Jwt.verify(token, process.env.JWT_SECRET);
        // const user = await User.findById(decoded._id);
        // req.user = user;
        req.userId = decoded.userId
        next();
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message,
        })
        
    }

}
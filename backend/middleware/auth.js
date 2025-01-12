import { User } from "../Model/User.js";
import Jwt from "jsonwebtoken";

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

export const isAuthenicated = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: "Login to access this resource",
            });
        }
        const token = authHeader.split(' ')[1];
        const decoded = Jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message,
        })

    }

}
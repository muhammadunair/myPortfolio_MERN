import mongoose from "mongoose";


export const  connectDatabase = ()=>{
    console.log(process.env.MONGO_URI);
    mongoose.connect(process.env.MONGO_URI).then((c)=>{
        console.log(`MongoDB connect to: ${c.connection.host}`);
    }).catch((e)=>{
        console.log(e);
    })
}
import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv"

dotenv.config();

const connectDB = async ()=> {
 try {
    const connect = await mongoose.connect(process.env.DB_URL);
    console.log(`Server Spinning sucessfully on ${mongoose.connection.host}`.bgMagenta.white)
 } catch (error) {
    console.log(`There is some error : ${error}`.bgYellow.white)
 }
}


export default connectDB
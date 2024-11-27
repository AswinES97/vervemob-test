import mongoose from "mongoose";
import { configKeys } from "./keys.js";

const dbConfig = async () => {
    try {
        await mongoose.connect(configKeys.MONGO_URL).then(()=>{
            console.log('db connected')
        })
    } catch (err) {
        console.log("mongoerror: ", err)
    }
};

export default dbConfig
import { Redis } from "ioredis";
import mongoose from "mongoose";


const url = process.env.DB_URL || ""
const redisURL = process.env.REDIS_URL ?? ""

// mongodb connection
export default async function dbConnect() {
    try {
        await mongoose.connect(url)
    } catch(error) {
        console.log(error)
        throw new Error("Error in mongodb connection.")
    }
}

//redis cache Instance
export const redisCache = new Redis(redisURL)
import mongoose from "mongoose";

// mongodb connection
function dbConnect() {
    const url = process.env.DB_URL || ""
    console.log(url, "url")
    
    mongoose.connect(url)
    .then(()=> console.log("DB Connected."))
    .catch((error)=>console.log("DB Not Connected.", error))
}
dbConnect()
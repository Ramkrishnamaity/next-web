import mongoose, { Document, Schema } from "mongoose";
import { OtpModelType } from "@/lib/types/Model/Otp";



const OtpSchema = new Schema<OtpModelType<Document["_id"]>>({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 5  // document will be deleted after 5 minutes of its creation.
    }
})

const OtpModel = mongoose.models.otp || mongoose.model<OtpModelType<Document["_id"]>>("otp", OtpSchema)

export default OtpModel


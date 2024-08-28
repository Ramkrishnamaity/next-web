import { UserModelType } from "@/lib/types/Model/User"
import mongoose, { Document, Schema } from "mongoose"
import { CommonModelType } from "."

const UserSchema = new Schema<UserModelType<CommonModelType & Document["_id"]>>({
	about: {
		type: String,
	},
	firstName: {
		type: String,
		required: [true, "First Name is Required."]
	},
	lastName: {
		type: String,
		required: [true, "Last Name is Required."]
	},
	email: {
		type: String,
		required: [true, "Email is required."],
		unique: true
	},
	password: {
		type: String,
		required: [true, "Password is Required."]
	},
	image: {
		type: String,
		default: "http://127.0.0.1:4050/api/v1/uploads/profile.png"
	},
	createdOn: {
		type: Date,
		default: Date.now
	},
	updatedOn: {
		type: Date,
		default: Date.now
	},
	isDeleted: {
		type: Boolean,
		default: false
	}
})


const UserModel = mongoose.models.User || mongoose.model<UserModelType<CommonModelType & Document["_id"]>>("User", UserSchema)

export default UserModel

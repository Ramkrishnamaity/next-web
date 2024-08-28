"use server"

import { UserLoginCredentialType, UserOtpCredentialType, UserRegisterCredentialType } from "@/lib/types/Auth";
import { CommonResponceType } from "@/lib/types/Responce";
import { ResponceMessages } from "@/lib/utils/ResponceCode";
import dbConnect, { redisCache } from "@/lib/utils/Connection";
import UserModel from "@/models/User";
import { compare, genSaltSync, hashSync } from "bcrypt"
import generateToken, { InputValidator, MailSender } from "@/lib/utils";
import { cookies } from "next/headers";
import { generate } from "otp-generator";
import OtpModel from "@/models/Otp";

export async function login(credentials: UserLoginCredentialType): Promise<CommonResponceType> {
    try {
        const responce = await InputValidator(credentials, {
            email: "required",
            password: "required"
        })
        if (responce.status) {
            await dbConnect()

            const { email, password } = credentials

            const user = await UserModel.findOne({ email })
            if (!user) {
                return {
                    status: false,
                    message: ResponceMessages.NOT_FOUND
                }
            } else {
                if (await compare(password, user.password)) {

                    const token = generateToken({ _id: user._id })

                    // push in redis cache
                    await redisCache.set(`user:${user._id}:token`, token)
                    await redisCache.set(token, user._id)

                    cookies().set("token", token, { secure: true })

                    return {
                        status: true,
                        message: "User Logged in Successfully"
                    }
                } else {
                    return {
                        status: false,
                        message: "Incorrect Password or User."
                    }
                }
            }
        } else {
            return responce
        }
    } catch (error: any) {
        return {
            status: false,
            message: ResponceMessages.SERVER_ERROR
        }
    }
}

export async function siginup(credentials: UserRegisterCredentialType): Promise<CommonResponceType> {
    try {

        const responce = await InputValidator(credentials, {
            email: "required",
            password: "required",
            firstName: "required",
            lastName: "required",
            otp: "required"
        })
        if (responce.status) {
            await dbConnect()

            const { email, password, firstName, lastName, otp } = credentials

            const user = await UserModel.findOne({ email })
            if (user) {
                return {
                    status: false,
                    message: "User Already Registered."
                }
            } else {
                const otpDoc = await OtpModel.findOne({ email })
                if (!otpDoc || otpDoc.otp !== otp) {
                    return {
                        status: false,
                        message: "Invalid Otp."
                    }
                } else {
                    const salt = genSaltSync(10)
                    const hashedPassword = hashSync(password, salt)

                    const user = await UserModel.create({ email, firstName, lastName, password: hashedPassword })
                    const token = generateToken({ _id: user._id })

                    // push in redis cache
                    await redisCache.set(`user:${user._id}:token`, token)
                    await redisCache.set(token, user._id)

                    cookies().set("token", token, { secure: true })

                    return {
                        status: true,
                        message: "User Registered Successfully"
                    }
                }
            }
        } else {
            return responce
        }

    } catch (error: any) {
        return {
            status: false,
            message: ResponceMessages.SERVER_ERROR
        }
    }
}

export async function sendotp(credentials: UserOtpCredentialType): Promise<CommonResponceType> {
    try {

        const responce = await InputValidator(credentials, {
            email: "required"
        })
        if (responce.status) {
            await dbConnect()

            const { email } = credentials

            const user = await UserModel.findOne({ email })
            if (user) {
                return {
                    status: false,
                    message: "User Already Registered."
                }
            } else {
                const otp = generate(6, {
                    upperCaseAlphabets: false,
                    lowerCaseAlphabets: false,
                    specialChars: false
                })
                if (await MailSender(email, "SignUp Verification", `Your Otp is ${otp}`)) {
                    await OtpModel.findOneAndUpdate(
                        {
                            email
                        },
                        {
                            $set: {
                                otp
                            }
                        },
                        { upsert: true }
                    )
                    return {
                        status: true,
                        message: "OTP Sent Successfully"
                    }
                } else {
                    return {
                        status: false,
                        message: ResponceMessages.SERVER_ERROR
                    }
                }
            }
        } else {
            return responce
        }

    } catch (error: any) {
        return {
            status: false,
            message: ResponceMessages.SERVER_ERROR
        }
    }
}

export async function logout() {
    cookies().delete('token')
    return true
}
"use server"

import { UserLoginCredentialType } from "@/lib/types/Auth";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
// import { CommonResponceType } from "@/lib/types/Responce";

export default async function login(credentials: FormData) {
    try{

        // const {email, password} = credentials
        // const res = await signIn("Credentials", {
        //     email,
        //     password
        // })
        // if(res?.url){
        //     redirect("/dashboard")
        // } else {
        //     throw new Error("Login Error")
        // }
        
    } catch(error: any) {
        console.log(error)
        throw new Error(error)
    }
}
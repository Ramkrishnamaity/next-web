import { JwtPayload, verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
import generateToken from './lib/utils'

const LoginProtectedRoutes = ["/login", "/"]
const NotLoginProtectedRoutes = ["/dashboard", "/"]



export async function middleware(request: NextRequest) {

    const cookieeStore = cookies()
    const token = cookieeStore.get('token')

    if (!token && NotLoginProtectedRoutes.includes(request.nextUrl.pathname)) {

        const absoluteUrl = new URL("/login", request.nextUrl.origin)
        return NextResponse.redirect(absoluteUrl.toString())

    } else if (token) {

        try {
            // const decrypted = verify(token.value, process.env.JWT_SECRET ?? "") as JwtPayload
            // const cacheToken = await redisCache.get(`user:${decrypted._id}:token`)
            // if (cacheToken !== token.value) {
            //     cookieeStore.delete('token')
            //     const absoluteUrl = new URL("/login", request.nextUrl.origin)
            //     return NextResponse.redirect(absoluteUrl.toString())
            // } else {
            //     if (LoginProtectedRoutes.includes(request.nextUrl.pathname)) {
            //         const absoluteUrl = new URL("/dashboard", request.nextUrl.origin)
            //         return NextResponse.redirect(absoluteUrl.toString())
            //     } else {
            //     }
            // }
            return NextResponse.redirect(request.nextUrl)
        } catch (error) {

            // const cacheUser = await redisCache.get(token.value)
            // if (!cacheUser) {
            //     cookieeStore.delete('token')
            //     const absoluteUrl = new URL("/login", request.nextUrl.origin)
            //     return NextResponse.redirect(absoluteUrl.toString())
            // } else {
            //     const newToken = generateToken({ _id: cacheUser })
            //     cookieeStore.set('token', newToken)
            //     // push in redis cache
            //     await redisCache.set(`user:${cacheUser}:token`, newToken)
            //     await redisCache.set(newToken, cacheUser)
            //     if (LoginProtectedRoutes.includes(request.nextUrl.pathname)) {
            //         const absoluteUrl = new URL("/dashboard", request.nextUrl.origin)
            //         return NextResponse.redirect(absoluteUrl.toString())
            //     } else {
            //         return NextResponse.redirect(request.nextUrl)
            //     }
            // }

        }

    }

}

export const config = {
    matcher: ['/login', '/signup', '/dashboard', '/'],
}
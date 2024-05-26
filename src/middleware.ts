// import { getServerSession } from 'next-auth'
// import { NextResponse, NextRequest} from 'next/server'

// const LoginProtectedRoutes = ["/login", "/"]
// const NotLoginProtectedRoutes = ["/dashboard", "/"]

export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard"] }

// export async function middleware(request: NextRequest) {

//     const session = await getServerSession()

//     if(!session && NotLoginProtectedRoutes.includes(request.nextUrl.pathname)) {

//         const absoluteUrl = new URL("/login", request.nextUrl.origin)
//         return NextResponse.redirect(absoluteUrl.toString())

//     } else if(session && LoginProtectedRoutes.includes(request.nextUrl.pathname)) {
        
//         const absoluteUrl = new URL("/dashboard", request.nextUrl.origin)
//         return NextResponse.redirect(absoluteUrl.toString())

//     }
    
// //   return NextResponse.redirect(request.url)
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }
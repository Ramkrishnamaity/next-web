
// // import GoogleProvider from "next-auth/providers/google"
// import { NextAuthOptions } from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
// import GoogleProvider from "next-auth/providers/google"

// export const authOptions: NextAuthOptions = {
//     session: {
//         strategy: "jwt"
//     },
//     providers: [
//         CredentialsProvider({
//             id: "credentials",
//             name: "Credentials",
//             credentials: {},
//             async authorize(credentials): Promise<any> {
//                 // const user = {email: credentials?.email}
//                 // return user
//             }
//         }),
//         GoogleProvider({
//             clientId: "",
//             clientSecret: ""
//         })
//     ]
// }

export type UserLoginCredentialType = {
    email: string,
    password: string
}

export type UserRegisterCredentialType = {
    email: string,
    firstName: string,
    lastName: string,
    otp: string
    password: string
}

export type UserOtpCredentialType = {
    email: string
}
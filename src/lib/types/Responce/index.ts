
export type CommonResponceType <T = Record<string, any>> = T & {
    status: boolean,
    message: string,
    data?: T,
    error?: any
}

export type CommonResponceType <T = Record<string, any>> = T & {
    status: true,
    message: string,
    data?: T,
    error?: any
}
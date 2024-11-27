import 'dotenv/config'

export const configKeys = {
    PORT: process.env.port || 4000,
    MONGO_URL: process.env.MONGO_URL || ""
}
import http from "node:http"
import { configKeys } from "./config/keys.js"
import app from "./app.js"
import dbConfig from "./config/dbConfig.js"

const PORT = configKeys.PORT
const server = http.createServer(app)

const startServer = async ()=>{
    await dbConfig()
    server.listen(PORT, ()=>{
        console.log(`listening on http://localhost:${PORT}`)
    })
}

(async ()=>{
    await startServer()
})()
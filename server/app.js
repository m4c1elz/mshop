import express from "express"
import cors from "cors"
import { router as clientRoutes } from "./routes/clientRoutes.js"
import { router as productRoutes } from "./routes/productRoutes.js"
import { router as cartRoutes } from "./routes/cartRoutes.js"
import { router as addressRoutes } from "./routes/addressRoutes.js"
import * as url from "url"

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors())

app.set("json spaces", 2)
app.set(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
	res.sendFile(__dirname + "./index.html")
})

app.use("/clients", clientRoutes)
app.use("/products", productRoutes)
app.use("/cart", cartRoutes)
app.use("/address", addressRoutes)

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})

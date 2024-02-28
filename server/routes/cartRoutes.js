import express from "express"
import * as cartModel from "../models/cartModel.js"

export const router = express.Router()

router.get("/", async (req, res) => {
	const { client } = req.query

	const response = await cartModel.getCart(client)
	res.json(response)
})

router.post("/:clientId", async (req, res) => {
	const { clientId } = req.params
	const { productId, date } = req.body

	const response = await cartModel.addToCart(clientId, productId, date)
	res.json(response)
})

router.delete("/:id", async (req, res) => {
	const { id } = req.params

	const response = await cartModel.removeFromCart(id)
	res.json(response)
})

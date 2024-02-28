import express from "express"
import * as productModel from "../models/productModel.js"

export const router = express.Router()

router.get("/", async (req, res) => {
	const response = await productModel.getProducts()
	res.json(response)
})

router.get("/:id", async (req, res) => {
	const { id } = req.params

	const response = await productModel.getProduct(id)
	res.json(response)
})

router.post("/", async (req, res) => {
	const { name, description, price, type } = req.body

	const response = await productModel.addProduct(
		name,
		description,
		price,
		type
	)
	res.json(response)
})

router.delete("/:id", async (req, res) => {
	const { id } = req.params

	const response = await productModel.deleteProduct(id)
	res.json(response)
})
